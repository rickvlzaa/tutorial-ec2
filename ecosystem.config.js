module.exports = {
  apps: [{
    name: 'tutorial-ec2',
    script: '.current/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-255-220.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rickvlzaa/tutorial-ec2.git',
      path: '/home/ubuntu/tutorial-ec2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}