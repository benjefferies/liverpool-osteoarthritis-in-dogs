provider "auth0" {
  domain = "dogarthritistest.eu.auth0.com"
  debug  = true
}

terraform {
  backend "s3" {
    bucket = "dogarthritistest.co.uk-state"
    key    = "state.tfstate"
    region = "us-east-1"
  }
}

resource "auth0_tenant" "tenant" {
  friendly_name    = "Liverpool Osteoarthritis In Dogs"
  session_lifetime = 720
  sandbox_version  = "8"
}

resource "auth0_resource_server" "resource_server" {
  name        = "Resource server"
  identifier  = "https://api.dogarthritistest.co.uk"
  signing_alg = "RS256"

  allow_offline_access                            = true
  token_lifetime                                  = 8600
  skip_consent_for_verifiable_first_party_clients = true
}

resource "auth0_client" "webapp" {
  name                       = "Webapp"
  app_type                   = "spa"
  is_first_party             = true
  token_endpoint_auth_method = "none"
  oidc_conformant            = true
  callbacks                  = ["http://localhost:3000", "https://dogarthritistest.co.uk/callback"]
  allowed_origins            = ["http://localhost:3000", "https://dogarthritistest.co.uk"]
  grant_types                = ["authorization_code", "http://auth0.com/oauth/grant-type/password-realm", "implicit", "password", "refresh_token"]
  allowed_logout_urls        = ["http://localhost:3000", "https://dogarthritistest.co.uk"]
  web_origins                = ["http://localhost:3000", "https://dogarthritistest.co.uk"]
  jwt_configuration {
    alg = "RS256"
  }
}

resource "auth0_client_grant" "webapp" {
  client_id = auth0_client.webapp.id
  audience  = auth0_resource_server.resource_server.identifier
  scope     = []
}
