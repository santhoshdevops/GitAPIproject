# GitAPIproject

# GitAPIproject

Install NodeJS on your machine

Now open the NodeJS Command prompt and check whether latest version is installed by typing verify node --version

Install NPM

Download the gitCode file from repository and open it on NodeJS command prompt by typing node gitCode.js

When prompted type any GitHub ID and wait for few seconds to see the 5 followers of GitHub ID passed and also list of followers for each follower in JSON format

You should see information like loginname, userid, followers_url and list of followers.

Example:

D:\>node --version
v8.8.1

D:\>node gitCode.js

Enter the name of user : 

avigoldman

avigoldman
{ login: 'sgrutman978',
  userId: 5942697,
  followers_url: 'https://api.github.com/users/sgrutman978/followers',

followers:
   [ { login: 'avigoldman',
       userId: 4924860,
       followers_url: 'https://api.github.com/users/avigoldman/followers' },
     { login: 'sholk96',
       userId: 29662841,
       followers_url: 'https://api.github.com/users/sholk96/followers' } ] }

{ login: 'aydrian',
  userId: 981130,
  followers_url: 'https://api.github.com/users/aydrian/followers',

followers:
   [ { login: 'vernak2539',
       userId: 521270,
       followers_url: 'https://api.github.com/users/vernak2539/followers' },
     { login: 'AmandaChau',
       userId: 5247134,
       followers_url: 'https://api.github.com/users/AmandaChau/followers' },
     { login: 'orval',
       userId: 1440817,
       followers_url: 'https://api.github.com/users/orval/followers' },
     { login: 'stevenacamp',
       userId: 16865884,
       followers_url: 'https://api.github.com/users/stevenacamp/followers' },
     { login: 'ksbdude',
       userId: 3849530,
       followers_url: 'https://api.github.com/users/ksbdude/followers' } ] }

{ login: 'jpteti',
  userId: 312700,
  followers_url: 'https://api.github.com/users/jpteti/followers',

followers:
   [ { login: 'skoda',
       userId: 1173422,
       followers_url: 'https://api.github.com/users/skoda/followers' },
     { login: 'fffabs',
       userId: 110401,
       followers_url: 'https://api.github.com/users/fffabs/followers' },
     { login: 'SorenKierkegaard',
       userId: 4955455,
       followers_url: 'https://api.github.com/users/SorenKierkegaard/followers'
},
     
     { login: 'STRd6',
       userId: 18894,
       followers_url: 'https://api.github.com/users/STRd6/followers' },
     
     { login: 'cusspvz',
       userId: 3604053,
       followers_url: 'https://api.github.com/users/cusspvz/followers' } ] }

{ login: 'elanhamburger',
  userId: 23509554,
  followers_url: 'https://api.github.com/users/elanhamburger/followers',

followers: [] }
{ login: 'papagunit',
  userId: 8437025,
  followers_url: 'https://api.github.com/users/papagunit/followers',
  
  followers:
   [ { login: 'nsabharwal',
       userId: 8699032,
       followers_url: 'https://api.github.com/users/nsabharwal/followers' },
     { login: 'tspannhw',
       userId: 18673814,
       followers_url: 'https://api.github.com/users/tspannhw/followers' },
     { login: 'Vermisse',
       userId: 17972943,
       followers_url: 'https://api.github.com/users/Vermisse/followers' },
     { login: 'mrhegemon',
       userId: 5104160,
       followers_url: 'https://api.github.com/users/mrhegemon/followers' },
     { login: 'DiptarkBose',
       userId: 21203266,
       followers_url: 'https://api.github.com/users/DiptarkBose/followers' } ] }
