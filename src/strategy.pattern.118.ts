class Usr {
  githubToken: string;

  jwtToken: string;
}

interface AuthStrategy {
  auth(user: Usr): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: Usr): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: Usr): boolean {
    if (user.jwtToken) {
      // go to API etc...
      return true;
    }
    return false;
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: Usr): boolean {
    if (user.githubToken) {
      // go to API etc...
      return true;
    }
    return false;
  }
}

const user = new Usr();
user.jwtToken = 'token';
const ath = new Auth(new JWTStrategy());
console.log(ath.authUser(user));
ath.setStrategy(new GithubStrategy());
console.log(ath.authUser(user));

// NOTE: console output:
//
// true
// false
