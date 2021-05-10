module.exports = {
  branchPrefix: 'renovate-github/',
  dryRun: false,
  gitAuthor: 'Renovate Bot GitHub <bot@renovateapp.com>',
  platform: 'github',
  repositories: ['ng-easy/platform', 'ng-easy/renovate-config'],
  includeForks: false,
  dependencyDashboard: true,
  onboarding: false,
  autodiscover: false,
  trustLevel: 'high',
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: ['^npm ci', '^npm i', '^npx ng update', '^npx nx migrate', '^npx nx lint', '^rm -f migrations.json'],
};
