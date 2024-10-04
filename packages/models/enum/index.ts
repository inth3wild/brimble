export enum GIT_TYPE {
  GITHUB = "GITHUB",
  GITLAB = "GITLAB",
  BITBUCKET = "BITBUCKET",
}

export enum REQUEST_TYPE {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE"
}

export enum ENVIRONMENT {
  PREVIEW = "PREVIEW",
  PRODUCTION = "PRODUCTION",
}

export enum INTEGRATION_TYPES {
  Messaging = "MESSAGING",
  ErrorTracking = "ERROR_TRACKING",
  DevTools = "DEVTOOLS",
  Security = "SECURITY",
  Analytics = "ANALYTICS",
  Storage = "STORAGE",
  Logging = "LOGGING",
  Monitoring = "MONITORING",
  Cms = "CMS",
}

export enum INTEGRATION_PROVIDERS {
  Slack = "SLACK",
  Sentry = "SENTRY",
  Discord = "DISCORD",
  Onboardbase = "ONBOARDBASE",
  Contentful = "CONTENTFUL",
  Novu = "NOVU",
  Netlify = "NETLIFY",
  GoogleAnalytics = "GOOGLE_ANALYTICS",
}

export enum CARD_TYPES {
  MASTERCARD = "MASTERCARD",
  VISA = "VISA",
  VERVE = "VERVE",
}

export enum PROJECT_STATUS {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  INPROGRESS = "INPROGRESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  PAYMENT = "PAYMENT DUE",
}

export enum SUBSCRIPTION_STATUS {
  ACTIVE = "active",
  INACTIVE = "in-active",
}

export enum SUBSCRIPTION_PLAN_TYPE {
  FreePlan = 'FREE_PLAN',
  DeveloperPlan = 'DEVELOPER_PLAN',
  TeamPlan = 'TEAM_PLAN',
  DatabasePlan = 'DATABASE_PLAN',
}

export enum OAUTH_PERMISSIONS {
  READ_USER = "read_user",
  READ_PROJECT = "read_project",
  UPDATE_CREDENTIALS = "update_credentials",
}

export enum SERVER_STATUS {
  Active = "active",
  InActive = "in-active",
}

export enum DNS_TYPE {
  A = "A",
  CNAME = "CNAME",
  NS = "NS",
  TXT = "TXT",
  MX = "MX",
  SPF = "SPF",
}

export enum ROLES {
  CREATOR = "CREATOR",
  ADMINISTRATOR = "ADMINISTRATOR",
  MEMBER = "MEMBER"
}

export enum PERMISSION_TYPE {
  DOMAIN = 'DOMAIN',
  BILLING = 'BILLING',
  PROJECT = 'PROJECT',
  INTEGRATION = 'INTEGRATION',
  USERS = 'USERS'
}

export enum ServiceType {
  Database = 'database',
  WebService = 'web-service',
}

export enum DatabaseEngine {
  MySQL = 'mysql',
  PostgreSQL = 'postgresql',
  MongoDB = 'mongodb',
  Redis = 'redis',
  WordPress = 'wordpress',
  SQLite = 'sqlite',
}