var bio = {
	"name" : "Ed Barron",
 	"role" : "Quality Assurance Coordinator",
 	"contacts" :{
 		 	
 		"mobile": "804-304-5511",
 		"email":  "barron2606@hotmail.com",
 		"github": "barrongithub",
 		"twitter": "No Account",
 		"location": "Richmond"
 	 	}
 	 ,
 	"welcomeMessage": "Welcome",
 	"skills" : [
 		"reviewing calls", "pegging calls", "leading calibrations"
 		],
 	"bioPic":"images/fry.jpg"
 	
 }
function displayBio() {	

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
		if(bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills=HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
		var formattedSkills=HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkills);
		var formattedSkills=HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);	

		}
}

var education = { 
	"schools" : [
	{
	"name": "Randolph-Macon College",
	"location": "Ashland, VA",
	"degree" : "BA",
	"majors" : ["Politcal Science"],
	"dates" : 1993
	},
	{
	"name": "University of Cincinnati",
	"location": "Cincinnati, OH",
	"degree": "MBA",
	"majors": ["Internation Buisness"],
	"dates": 2003
	}
]
,
"onlineCourses" : [
	{
	"title" : "Javascript Syntax",
	"school" : "Udacity",
	"dates" : 2014,
	"url": "http://www.udacity.com/course/ud804"
	}
	]
}
	function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append (formattedDates);
		var formattedLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append (formattedLocation);
		var formattedMajor= HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append (formattedMajor);	 
	}
	$("#education").append(HTMLonlineClasses);
	for(courses in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle= HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
		var formattedName=HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
		var formattedTitleName= formattedTitle + formattedName;
		$(".education-entry:last").append(formattedTitleName);
		var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl=HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
		$(".education-entry:last").append(formattedUrl);	 
	}
}


var work = {
	"jobs" : [
	{
	"employer" : "Capital One",
	"title" : "Senior Quality Coordinator",
	"dates" : "December 2011-Present",
	"location": "Richmond,VA",
	"description" : "Promoted to a Senior Quality Coordinator to monitor phone agents’ calls with the focus of providing detailed and actionable feedback in order to enhance their communication and customer service skills to improve performance."
	},
	{
	"employer" : "Capital One",
	"title" : "Risk Specialist",
	"dates" : "January 2010-December 2011",
	"location": "Richmond,VA",
	"description": "Responsible for making outbound and taking inbound calls for existing customers with delinquent loans."
	}
	]
}
	function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle= formattedEmployer+ formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);	
	var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location)
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}


var projects = {
	"projects": [
	{
	"title": "Sample Project 1",
	"dates" : "2014",
	"description": "Develop a web page with less than a 10% variance of a design mockup",
	"images": ["images/mug.jpg"],
	"url": "file:///C:/Users/Ed/Desktop/frontend-nanodegree-resume-master%20(1)/frontend-nanodegree-resume-master/images/mug.jpg"
	}
	]
}
	function displayProjects () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=  HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length) {
				for (image in projects.projects[project].images) {
				var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);	
				}		
		}
	}
}

$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;

	logClicks(x,y);
});
$("#mapDiv").append(googleMap);
displayBio();
displayWork();
displayProjects();
displayEducation();
