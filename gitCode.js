var request=require('request');
const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

line.question('Enter the name of user : ', (answer) => {
  line.close();
  console.log(`${answer}`);
  var userName = `${answer}`;
  startProcess(userName);
});

function startProcess(userName){
var dataObj = {};
var followersData=[];

function api(followersData,userName) {
	var options={
		uri:'https://api.github.com/users/'+userName+'/followers',
		method: 'GET',
		headers: {'User-Agent': 'sample-app'}	
	}
	request(options,function(error,response,body){
		
		if(JSON.parse(body).length>0 && JSON.parse(body).length>=5){
			for(var i=0;i<5;i++){
				var followedBy={};
					followedBy.login=JSON.parse(body)[i].login;
					followedBy.userId=JSON.parse(body)[i].id;
					followedBy.followers_url=JSON.parse(body)[i].followers_url;
					followersData.push(followedBy);
			}
			
		}
		else if(JSON.parse(body).length>0){
			for(var i=0;i<JSON.parse(body).length;i++){
				var followedBy={};
					followedBy.login=JSON.parse(body)[i].login;
					followedBy.userId=JSON.parse(body)[i].id;
					followedBy.followers_url=JSON.parse(body)[i].followers_url;
					followersData.push(followedBy);
			}
			
		}
		else{
				return;
		}
		
	});
};

function getFollowers_followers(followersData){
	for(var i=0;i<followersData.length;i++){
		var followersOfFollower=[];
		api(followersOfFollower,followersData[i].login);
		followersData[i].followers=followersOfFollower;
	}

}

api(followersData,userName);
setTimeout(function(){
	if(followersData.length>0){
		getFollowers_followers(followersData);
		printData();
	}
	else{
		console.log("No followers found for this user");
	}
},3000);

function printData(){
setTimeout(function(){
	for(var i=0;i<followersData.length;i++){
	console.log(followersData[i]);
}
},5000);	
}
}






