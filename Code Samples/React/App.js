import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerPic from './pics/header-background.jpg'
import footerPic from './pics/footer-background.jpg'
import mePic from './pics/me.jpg'
import howPic from './pics/how.jpg'
import myPic from './pics/my.jpg'
import whatPic from './pics/what.jpg'

import allstate from './pics/projects/allstate.jpeg'
import americangreetings from './pics/projects/americangreetings.jpeg'
import bellatlantic from './pics/projects/bellatlantic.jpeg'
import brinson from './pics/projects/brinson.jpeg'
import cgn from './pics/projects/cgn.jpeg'
import commoncode from './pics/projects/commoncode.jpeg'
import coursecatelog from './pics/projects/coursecatelog.jpeg'
import deansgrads from './pics/projects/deansgrads.jpeg'
import dearborn2 from './pics/projects/dearborn2.jpeg'
import news from './pics/projects/news.jpg'

import devops from './pics/projects/devops.jpeg'
import drupal7to8 from './pics/projects/drupal7to8.jpeg'
import drupalsetup from './pics/projects/drupalsetup.jpeg'
import emergancyresponse from './pics/projects/emergancyresponse.jpeg'
import epotec from './pics/projects/epotec.jpeg'
import formprocessor from './pics/projects/formprocessor.jpeg'
import ice from './pics/projects/ice.jpeg'
//import pge from './pics/projects/pge.jpeg'

import applejacks from './pics/projects/Advertising/applejacks.jpeg'
import cornpops from './pics/projects/Advertising/cornpops.jpeg'
import hallmark from './pics/projects/Advertising/hallmark.jpeg'
import jennair from './pics/projects/Advertising/jennair.jpeg'
import oldsmobile from './pics/projects/Advertising/oldsmobile.jpeg'
import ricekrispies from './pics/projects/Advertising/ricekrispies.jpeg'
//import truevalue from './pics/projects/Advertising/truevalue.jpeg'
import integration from './pics/projects/integration.jpeg'

import skill1 from './skills/1.jpeg'
import skill2 from './skills/2.jpeg'
import skill3 from './skills/3.jpeg'

import skill10 from './skills/10.jpeg'
import skill11 from './skills/11.jpeg'
import skill12 from './skills/12.jpeg'
import skill13 from './skills/13.jpeg'
import skill14 from './skills/14.jpeg'
import skill15 from './skills/15.jpeg'
import skill16 from './skills/16.jpeg'
import skill17 from './skills/17.jpeg'
import skill18 from './skills/18.jpeg'
import skill20 from './skills/20.jpeg'
import skill21 from './skills/21.jpeg'

import skill30 from './skills/30.jpeg'
import skill31 from './skills/31.jpeg'
import skill32 from './skills/32.jpeg'
import skill36 from './skills/36.jpeg'

import skill40 from './skills/40.jpeg'
import skill41 from './skills/41.jpeg'
import skill42 from './skills/42.jpeg'

import skill50 from './skills/50.jpeg'
import skill51 from './skills/51.jpeg'
import skill52 from './skills/52.jpeg'
import skill53 from './skills/53.jpeg'
import skill54 from './skills/54.jpeg'
import skill55 from './skills/55.jpeg'
import skill56 from './skills/56.jpeg'
import skill57 from './skills/57.jpeg'
import skill58 from './skills/58.jpeg'
import skill59 from './skills/59.jpeg'

import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class App extends React.Component {

	openMore = (e) => {
		let element = e.target.parentNode.parentNode.querySelector('div').querySelector('div').nextSibling.nextSibling;

		if (element.style.display === "") {
			element.style.display = "inline-block"
		} else {
			element.style.display = ""
		}
	}

	openEmail = (e) => {
		document.getElementById("footer-contact-types-choice").innerHTML = '<a href="mailto:drewquinn@seaquinn">apquinn@gmail.com</a>'
	}

	openAddress = (e) => {
		document.getElementById("footer-contact-types-choice").innerHTML = "335 Pelissier Lake Rd &nbsp; Marquette, MI &nbsp; 49855"
	}
	
	openPhone = (e) => {
		document.getElementById("footer-contact-types-choice").innerHTML = "906-235-6303"
	}

	openIcons = (e) => {
		document.getElementById("more-skills").style.display = "block";
		document.getElementById("more-message-wrapper").style.display = "none";
	}

	openProjects = (e) => {
		document.getElementById("projects-section3").style.display = "block";
		document.getElementById("projects-section4").style.display = "block";
		document.getElementById("projects-section5").style.display = "block";
		document.getElementById("projects-section6").style.display = "block";
		document.getElementById("projects-section7").style.display = "block";
		document.getElementById("projects-section8").style.display = "block";

		let element = e.target.parentNode;
		element.style.display = "none";
	}

	renderIndicator: (
		clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
		isSelected: boolean,
		index: number,
		label: string
	) => React.ReactNode;


	render() {
		return (
			<>
			<div className="header-black-background">
				<img alt="sea quinn" src={headerPic} className="responsive-img seaquinn" />
				<div className="header-text-wrapper">
					<div className="header-text1">Sea Quinn</div>
					<h3>Software Architect. Woodworker. Groovy Individual.</h3>
				</div>
			</div>


			<Container className="special-wrapper">
				<Row>
					<Col md={12}>
						<h1>What makes me so special?</h1>
					</Col>
					<Col md={7}>
						<div className="special-section1">
							<p>I'm a graduate of Michigan State University with simultaneous degrees in computer science, industrial psychology and minor in art history. I began my career at Accenture, followed by creating dozens of web-based applications and then helping to start what was for a shot time a billion-dollar startup. After living the super-fast paced life of a consultant and software architect through the booming of the Internet, I now lives a quieter, but nonetheless technically challenging, life running my software business, Sea Quinn, from an 80 acres forest in Michigan’s Upper Peninsula. Life on the shores of Lake Superior is unmatched with vast beaches in the summer and winters with over 200 inches of snow. The life of skiing and snowshoeing in the winter and hiking and swimming in the summer are shared with my wife, Amy, and their two dogs, Wondermutt the Australian cattle dog and Maisy the Rottweiler. </p>
							<h4>Why Sea Quinn?</h4>
							<p>Sea Quinn was the name of my dad’s Boston Whaler power boat. So many great memories that are now memorialized with my company name. </p>
						</div>
					</Col>
					<Col md={5}>
						<div className="special-section2">
							<div><img alt="Drew Quinn" className="responsive-img" src={mePic} /></div>
							<p>“The unchanged passion of my life has been to take ideas and make them reality. Whether they are technical innovations or things made of wood, I've got the expertise to make it happen.“</p>
						</div>
					</Col>
				</Row>
			</Container>	


			<div className="blueBackground firstblue">
				<Container>
					<Row>
						<Col md={4}>
							<div className="blue-wrapper bar">
								<div><img alt="What do I do" src={whatPic} /></div>
								<h4>What do I do?</h4>
								<p>I'm a software architect. From big to small, large teams to solo project. </p>
								<p><a href="#projects">Check out my experience</a></p>
							</div>
						</Col>
						<Col md={4}>
							<div className="blue-wrapper bar">
								<div><img alt="My expertise" src={myPic} /></div>
								<h4>My expertise</h4>
								<p>Full-lifecycle web development projects and all the technologies required to deliver them. </p>
								<p><a href="#skills">See my skills</a></p>
							</div>
						</Col>
						<Col md={4}>
							<div className="blue-wrapper">
								<div><img alt="How can I help" src={howPic} /></div>
								<h4>How can I help?</h4>
								<p>Right now I'm looking for Node.js and React based projects. If that works for you, I'm your guy.</p>
								<p><a href="#contact">Get in touch</a></p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>


			<div className="blackBackground">
				<Carousel className="people" showThumbs={false} >
					<div>
						<Container>
							<Row>
								<Col md={9} className="people-wrapper">
									<div className="people-header">
										<p>What people are saying</p>
									</div>
								</Col>
							</Row>

							<Row>
								<Col md={9} className="people-wrapper">
									<div className="people-title">
										<h2>Regarding 2019-20 Drupal 7 to 8 migration</h2>
									</div>
								</Col>
							</Row>

							<Row className="people-flex">
								<Col md={8} className="people-wrapper">
									<div className="people-text">
										<p>“Every few years we attempt the impossible.  We take our fully functioning, yet somewhat dated website, and we migrate the content into a new version of the site. This year we didn’t just start migrating content, we also started the process that will rewrite the underlying framework that powers the NMU website.  As with past conversions, Drew has played a critical role in this process by not only figuring out how we can accomplish this migration but also automating large pieces of it making the migration of over 40 thousand nodes actually possible.”</p>
									</div>
								</Col>
								<Col md={4} className="people-who-wrapper">
									<div className="people-who-parent">
										<div className="people-who">
											<p>
												<strong>Eric Johnson</strong><br/>
												Web Systems Director<br/>
												Northern Michigan University
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>


					<div>
						<Container>
							<Row>
								<Col md={9} className="people-wrapper">
									<div className="people-header">
										<p>What people are saying</p>
									</div>
								</Col>
							</Row>

							<Row>
								<Col md={9} className="people-wrapper">
									<div className="people-title">
										<h3>Regarding Transition During 2020 Epidemic</h3>
									</div>
								</Col>
							</Row>

							<Row className="people-flex">
								<Col md={8} className="people-wrapper">
									<div className="people-text">
										<p>“Working remotely and staying remote for a good part of the previous year was challenging for everyone on the team. Our normal office environment and processes were upended by an unprecedented pandemic.  Regardless of this, Drew has embraced working remotely and even thrived in this new environment.  Through his use of technology and willingness to initiate communication with the team, Drew has become one of the primary reasons why we can continue working at a high level regardless of where our individual offices are located. Beyond being able to take the lead on a highly technical project, which Drew has certainly done, being able to effectively communicate with everyone on the team and leverage their strengths to advance a project continues to be one of Drew’s invaluable assets.”</p>
									</div>
								</Col>
								<Col md={4} className="people-who-wrapper">
									<div className="people-who-parent">
										<div className="people-who">
											<p>
												<strong>Eric Johnson</strong><br/>
												Web Systems Director<br/>
												Northern Michigan University
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</Carousel>
			</div>


			<div id="projects" className="blueBackground">
				<Container>
					<Row>
						<Col lg={12}><div className="projects-title">Things I've done</div></Col>
					</Row>

					<div id="projects-section1">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="University News and Events" className="responsive-img" src={news} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">University News and Events</div>
										<p>The challenge: A system for writers to create, collaborate, post and distribute content to media outlets across the country.</p>
										<div className="hidden">
											<p>I had to find a way for multiple writers to create, submit for peer review and publish articles with media (image, audio and video) to all appropriate platforms (social media, web, email, etc) as well as distribute to media outlets by name or zip code coverage area, all through an intuitive interface able that allowed non-technical writers to quickly and intuitively accomplish these tasks.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Custom Global News" className="responsive-img" src={cgn} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Custom Global News</div>
										<p>How can extremely high-end hotels separate themselves from the competition?</p>
										<div className="hidden">
											<p>These hotels and resorts thrive on special treatment for their guests. I worked with an entrepreneur to deliver a system that took a daily guest data set containing guest home location, language and past resort activities. Each night the system calculated and distributed to writers worldwide the assignments needed to create a two-sided 12”x18” high quality newsletter containing local news, news highlights from the guests home, activities matched to their prior ones and local weather all in their preferred language. After the writers entered their stories, the system compiled them into pdfs that were sent to the hotel, printed and stuffed under the guests’ doors before 6 a.m. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Emergency Response System" className="responsive-img-med" src={emergancyresponse} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Emergency Response System</div>
										<p>The challenge: A system capable of handling a variety of possible emergencies on a university campus. </p>
										<div className="hidden">
											<p>From simple University closures (e.g. a snow day) that needed to post a message and updates across the entire ranges of university websites as well as send text messages to students and opted in family members. In the event of a more severe emergency, the University’s in-house server would be brought offline, opting for a basic pages hosted on an AWS platform. Both message and update posting as well as transitioning to a AWS was capable through a simple, secure user interface accessible to the University Marketing and Communications department as well as Public Safety. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
						</Row>
					</div>

					<div id="projects-section2">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="International Contemporary Ensemble" className="responsive-img-med" src={ice} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">International Contemporary Ensemble</div>
										<p>The members of ICE were musicians bonded together to meet the requests of performances around the world. The challenges… </p>
										<div className="hidden">
											<p>Who is going to composer and what pieces does he want played? That will tell you the instruments needed and allow you to select the musicians. What kind of special transportation needs are there for those musicians… and their instruments? I worked with ICE to create an application to manage these and many more coordinating and planning challenges.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="University Bulletin Course Catalog" className="responsive-img" src={coursecatelog} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">University Bulletin Course Catalog</div>
										<p>The challenge: Get rid of the book!</p>
										<div className="hidden">
											<p>It was time for a system to manage all versions of programs and courses and offer users information on program requirements, courses, upcoming offerings and the ability to save multiple schedules as they plan their semesters. This required integrating with multiple university systems, as well as deeply with the university’s 190+ site Drupal system which displayed subsets of data across appropriate department, major and recruiting sites. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Transition from Drupal 7… To Drupal 8" className="responsive-img-larger" src={drupal7to8} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Transition from Drupal 7… To Drupal 8</div>
										<p >If you know anything about Drupal, you understand the challenge here.</p>
										<div className="hidden">
											<p>While the goal of this migration was more than just an exact transfer of sites/pages to Drupal 8, the initial step was a script to create the sites, determine the currently used pages and elements and setup Drupal 8 to begin the look & feel changes. For each site the database and tables were created, configuring Apache and Drupal configuration file were made, creating a node (page) and mapping node ids and aliases to keep navigation intact were done. The next step involved rewriting dozens of external applications as Drupal modules while the remainder of the team updated content and integrated new content taking advantage of Drupal 8 types and cards. In all, the final product involved around 180 sites and 30,000 pages.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={(e) => this.openMore(e)}>Learn More</button></div>
								</div>
							</Col>
						</Row>
					</div>

					<div className="projects-opener"><button className="button-as-link" onClick={(e) => this.openProjects(e)}>want to see more?</button></div>

					<div id="projects-section3">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="SalesForce, Stackla, Localist and NMU APIs" className="responsive-img-med" src={integration} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">SalesForce, Stackla, Localist and NMU APIs</div>
										<p>The Challenge: Simplify the interaction with various external products?</p>
										<div className="hidden">
											<p>As part of the common code library, I was responsible for simplifying and enhancing API sets to allow developers to more easily move data in and out of both homegrown and vendor-provided products and of course to display content throughout the university websites.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Form Processing Tool" className="responsive-img-smaller" src={formprocessor} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Form Processing Tool</div>
										<p>The challenge: How to manage hundreds of forms university wide without burying technical staff. </p>
										<div className="hidden">
											<p>The solution allowed low-tech personnel to easily layout one or more pages of fields without the need to deal with how they were processed upon submission. The system would validate and capture the information storing it in a reliable enterprise database. A secure interface allowed non-technical form owners to view, edit, print or export their captured data.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="DevOps" className="responsive-img-larger" src={devops} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">DevOps!</div>
										<p>The challenge: Simplify the development environment setup so that developers can focus on value added tasks instead of configuration issues and code version problems. </p>
										<div className="hidden">
											<p>I was responsible for creating and managing an application that allowed developers to select a server and application, then spin up a virtual machine complete with the exact configuration of the server, all database content was synced, code was checked out of Git and a local address for them to work off. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
						</Row>
					</div>

					<div id="projects-section4">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Drupal 7 multisite installation" className="responsive-img-larger" src={drupalsetup} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Drupal 7 multisite installation</div>
										<p>How do you take over 160 sites with tens of thousands of HTML pages and move them into a multisite configuration of Drupal in 9 months? </p>
										<div className="hidden">
											<p>With a giant script of course! This was one of those unusual occasions when a developer saying “I need a fast computer and to be left alone” actually made sense and the kind of logic and coding was right up my alley. In the end the original content was pealed apart and stuffed in the appropriate tables and configuration files to create all the sites for a succesful, ontime completion.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Deans and Graduates" className="responsive-img-larger" src={deansgrads} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Deans and Graduates</div>
										<p>The challenge: How best can we market the success of our students?</p>
										<div className="hidden">
											<p>I was in charge of buidling a system to pull a list of deans and graduates each semester, determining what national and local media outlets covered their home zip codes, them building a nicely formated email that then got emailed or faxed to the relevant outlets.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Common Code Library" className="responsive-img" src={commoncode} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Common Code Library</div>
										<p>The challenge lies in the fact that a mistake here would break... well, everything</p>
										<div className="hidden">
											<p>No one wants to rebuild error handling, database transaction classes or API integration, etc for each project. Dozens of applications across the university rely on these classes. So they called on me to build and manage this code.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
						</Row>
					</div>

					<div id="projects-section5">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Epotec" className="responsive-img" src={epotec} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Epotec</div>
										<p>Epotec harnessed the resources of the Internet to enhance the effectiveness of behavioral health services. Epotec combined ingenuity and technology in Web-based interactive programs that help people lead happier, more productive lives by building skills and solving problems – securely and privately. </p>
										<div className="hidden">
											<p>More than 40 clients made our programs available to more than 700 companies and about 30 million people.</p>
											<p>I was brought in as Epotec’s seventh employee to architect and manage the delivery of their primary product by an outsourced team. As the product reached completion, I was responsible for bringing technology in-house. As vice president of technology, my responsibilities included putting together a 50-person development team, budgeting, managing venture capital partner expectations, but most importantly, understanding the needs of our broadening industry impact and ensuring our products were on target. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Online certification tracking system (Dearborn)" className="responsive-img-med" src={dearborn2} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Online certification tracking system (Dearborn Financial Services)</div>
										<p>How do large companies manage employees who have specialized certifications requirements and what happens to the company if the certifications expire? </p>
										<div className="hidden">
											<p>For starters, if companies have employees with expired certifications, such as Series-7 financial certifications, they are heavily fined. Dearborn Financial Services saw an opportunity and hired me to lead of team of six to build a system that track the neccesary certification requirements for each employee, notifying them when training was required and provided a link to the necessary materials. In the event an employee became at risk of falling out of compliance, the system would notify managers in a timely manner. </p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Brinson Partners Presentation Management System" className="responsive-img" src={brinson} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Brinson Partners Presentation Management System</div>
										<p>In the world of Brinson Partners, making a presentation to a client that contains misinformation is a potential financial disaster.</p>
										<div className="hidden">
											<p>In order to mitigate this, all slides were created in the central office and no other content is allowed. In the past, the partner had to fly to the Chicago office to put their presentation together, which was then printed, bound and shipped to the location the presentation would take place. Don’t feel too bad for them, these partners all had their own jets! I was hired to build an application that allowed partners to view real-time images of the slides and organize them into the “story” the partner wanted to tell. When they were done, a presentation was created for them to download and print remotely, but not edit. In addition, stories could be saved and when opened later, for another client perhaps, the system would inform the partner if any of the original slides had been updated.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
						</Row>
					</div>

					<div id="projects-section6">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Allstate Online Insurance Marketplace" className="responsive-img-larger" src={allstate} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Allstate Online Insurance Marketplace</div>
										<p>Allstate determined from years of experience that buyers of term life insurance rarely by from the first vender they talk to.</p>
										<div className="hidden">
											<p>Drew led a team of 6 in building an online marketplace that allowed users to research term life on a generic site, fill out an application and receive quotes from an array of companies, each of which was able to upload and manage their own application and pricing criteria.</p>
										</div>
									</div>
									<div className="link-div" ><button className="button-as-link" onClick={this.openMore} >Learn More</button></div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Bell Atlantic" className="responsive-img-med" src={bellatlantic} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Bell Atlantic</div>
										<p>Have you ever called the east coast? Did it go through? Good, then the system I and 250 fellow “Androids” worked on to monitor the line status of all Bell Atlantic lines is working well!</p>
									</div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="American Greeting Cards" className="responsive-img-smaller" src={americangreetings} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">American Greeting Cards</div>
										<p>Have you ever received a shipment from American Greeting cards? Did it fit in the box? Excellent! The project I worked on to maximize the shipping container space worked. I was part of a 50-person team of Accenture (Andersen Consulting) personnel. </p>
									</div>
								</div>
							</Col>
						</Row>
					</div>


					<div id="projects-section7">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Corn Pops" className="responsive-img-med" src={cornpops} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Kellogg's Corn Pops</div>
										<p>Remember the first Corn Pops site in the late 90s? Drew built that. </p>
									</div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Apple Jacks" className="responsive-img-med" src={applejacks} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Kellogg's Apple Jacks</div>
										<p>Apple Jacks, yeah he built that too. </p>
									</div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Rice Krispies" className="responsive-img-med" src={ricekrispies} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Kellogg's Rice Krispies</div>
										<p>Rice Krispies? Of course. Who else would you turn to?</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>


					<div id="projects-section8">
						<Row className="drewrow">
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Oldsmobile" className="responsive-img-larger" src={oldsmobile} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Oldsmobile</div>
										<p>You could even spin the cars around and look in them! Now that’s cutting edge. And yes, Drew built it.</p>
									</div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Hallmark" className="responsive-img-larger" src={hallmark} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Hallmark</div>
										<p>It was simple and pretty… And Drew built it.</p>
									</div>
								</div>
							</Col>
							<Col lg={4} className="drewcol">
								<div className="project-box">
									<img alt="Jenn-air" className="responsive-img-larger" src={jennair} />
									<div className="project-box-inside">
										<div className="project-box-inside-title">Jenn-air</div>
										<p>I should have asked for free appliances for life. Oh well. Burt Reynolds built this one. OK, that’s a lie, Drew built it.</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>


			<div className="jobs-main">
				<Container>
					<Row>
						<Col md={12}>
							<div className="jobs-header">
								Places I've Worked
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Sea Quinn</span><br/>
								<span className="jobs-title">Owner</span><br/>
								<span className="jobs-dates">May 2001 – Current</span>
							</div>
						</Col>

						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Northern Michigan University</span><br/>
								<span className="jobs-title">Web Systems Manager</span><br/>
								<span className="jobs-dates">Dec 2006 – Dec 2020</span>
							</div>
						</Col>

						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Kemper Auto & Home Insurance</span><br/>
								<span className="jobs-title">Senior Business Analyst</span><br/>
								<span className="jobs-dates">Aug 2004 – Dec 2006</span>
							</div>
						</Col>
					</Row>

					<Row>
						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Epotec, Inc</span><br/>
								<span className="jobs-title">Vice President, Technology</span><br/>
								<span className="jobs-dates">Dec 1999 – Apr 2004</span>
							</div>
						</Col>

						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Metamor Technologies, Ltd</span><br/>
								<span className="jobs-title">Software Architect</span><br/>
								<span className="jobs-dates">Jan 1997 – Dec 1999</span>
							</div>
						</Col>
	
						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Giant Step</span><br/>
								<span className="jobs-title">Senior Developer</span><br/>
								<span className="jobs-dates">Jan 1996 – Jan 1997</span>
							</div>
						</Col>

					</Row>

					<Row>
						<Col md={4}>
							<div className="jobs-wrapper">
								<span className="jobs-company">Accenture</span><br/>
								<span className="jobs-title">Senior Consultant</span><br/>
								<span className="jobs-dates">Jan 1993 – Jan 1996</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>


			<div id="skills" className="skills">
				<Container>
					<Row>
						<Col lg={12}><div className="icon-title">Things I know about</div></Col>
					</Row>

					<Row>
						<Col md={6}>
							<div className="icon-wrapper"><div className="icon icon1"><img alt="Node.js" className="responsive-icon icon-opacity1" src={skill1} /></div><div className="icon-text">Node.js</div></div>
							<div className="icon-wrapper"><div className="icon icon2"><img alt="React.JS" className="responsive-icon icon-opacity1" src={skill2} /></div><div className="icon-text">React.JS</div></div>
							<div className="icon-wrapper"><div className="icon icon3"><img alt="MongoDB" className="responsive-icon icon-opacity1" src={skill3} /></div><div className="icon-text">MongoDB</div></div>
						</Col>


						<Col md={6}>
							<div className="icon-wrapper"><div className="icon icon4"><img alt="Apache" className="responsive-icon icon-opacity1" src={skill10} /></div><div className="icon-text">Apache</div></div>
							<div className="icon-wrapper"><div className="icon icon5"><img alt="PHP" className="responsive-icon icon-opacity1" src={skill11} /></div><div className="icon-text">PHP</div></div>
							<div className="icon-wrapper"><div className="icon icon6"><img alt="MySQL" className="responsive-icon icon-opacity1" src={skill12} /></div><div className="icon-text">MySQL</div></div>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon10"><img alt="Drupal" className="responsive-icon icon-opacity1" src={skill40} /><div className="icon-text">Drupal</div></div></div>
							<div className="icon-wrapper"><div className="icon icon10"><img alt="Drush" className="responsive-icon icon-opacity1" src={skill41} /><div className="icon-text">Drush</div></div></div>
							<div className="icon-wrapper"><div className="icon icon10"><img alt="Drupal Console" className="responsive-icon icon-opacity1" src={skill42} /><div className="icon-text">Drupal Council</div></div></div>
						</Col>
					</Row>

					<Row>
						<Col md={12} id="more-message-wrapper">
							<div id="more-message" className="icons-more-div">
								<button id="icons-more-button" className="button-as-link" onClick={(e) => this.openIcons(e)}>want to see more?</button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div id="more-skills" className="">
				<Container>
					<Row>
						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon7"><img alt="jQuery" className="responsive-icon icon-opacity1" src={skill13} /></div><div className="icon-text">jQuery</div></div>
							<div className="icon-wrapper"><div className="icon icon8"><img alt="SaSS" className="responsive-icon icon-opacity1" src={skill18} /></div><div className="icon-text">SASS</div></div>
							<div className="icon-wrapper"><div className="icon icon9"><img alt="Bootstrap" className="responsive-icon icon-opacity1" src={skill21} /></div><div className="icon-text">Bootstrap</div></div>
							<div className="icon-wrapper"><div className="icon icon18"><img alt="Ajax" className="responsive-icon icon-opacity1" src={skill14} /></div><div className="icon-text">Ajax</div></div>
							<div className="icon-wrapper"><div className="icon icon19"><img alt="Twig" className="responsive-icon icon-opacity1" src={skill20} /></div><div className="icon-text">Twig</div></div>
							<div className="icon-wrapper"><div className="icon icon20"><img alt="Javascript" className="responsive-icon icon-opacity1" src={skill15} /></div><div className="icon-text">Javascript</div></div>
							<div className="icon-wrapper"><div className="icon icon21"><img alt="HTML5" className="responsive-icon icon-opacity1" src={skill16} /></div><div className="icon-text">HTML5</div></div>
							<div className="icon-wrapper"><div className="icon icon22"><img alt="CSS" className="responsive-icon icon-opacity1" src={skill17} /></div><div className="icon-text">CSS</div></div>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon11"><img alt="MacOS" className="responsive-icon icon-opacity1" src={skill52} /></div><div className="icon-text">MacOS</div></div>
							<div className="icon-wrapper"><div className="icon icon12"><img alt="Fusion" className="responsive-icon icon-opacity1" src={skill54} /></div><div className="icon-text">Fusion</div></div>
							<div className="icon-wrapper"><div className="icon icon13"><img alt="Vagrant" className="responsive-icon icon-opacity1" src={skill55} /></div><div className="icon-text">Vagrant</div></div>
							<div className="icon-wrapper"><div className="icon icon14"><img alt="Linux" className="responsive-icon icon-opacity1" src={skill51} /></div><div className="icon-text">Linux</div></div>
						</Col>

						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon15"><img alt="Lets Encrypt" className="responsive-icon icon-opacity1" src={skill30} /></div><div className="icon-text">Lets Encrypt</div></div>
							<div className="icon-wrapper"><div className="icon icon16"><img alt="Github" className="responsive-icon icon-opacity1" src={skill32} /></div><div className="icon-text">GitHub</div></div>
							<div className="icon-wrapper"><div className="icon icon17"><img alt="Shell Scripting" className="responsive-icon icon-opacity1" src={skill53} /></div><div className="icon-text">Shell Scripting</div></div>
						</Col>

						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon23"><img alt="Banner" className="responsive-icon icon-opacity1" src={skill57} /></div><div className="icon-text">Banner</div></div>
							<div className="icon-wrapper"><div className="icon icon24"><img alt="Stackla" className="responsive-icon icon-opacity1" src={skill58} /></div><div className="icon-text">Stackla</div></div>
							<div className="icon-wrapper"><div className="icon icon25"><img alt="Localist" className="responsive-icon icon-opacity1" src={skill59} /></div><div className="icon-text">Localist</div></div>
							<div className="icon-wrapper"><div className="icon icon26"><img alt="SalesForce" className="responsive-icon icon-opacity1" src={skill56} /></div><div className="icon-text">Sales<i>Force</i></div></div>
						</Col>

						<Col md={12}>
							<div className="icon-wrapper"><div className="icon icon27"><img alt="Object Oriented" className="responsive-icon icon-opacity1" src={skill50} /></div><div className="icon-text">Object Oriented</div></div>
							<div className="icon-wrapper"><div className="icon icon28"><img alt="Composer" className="responsive-icon icon-opacity1" src={skill31} /></div><div className="icon-text">Composer</div></div>
							<div className="icon-wrapper"><div className="icon icon30"><img alt="Ghost Inspector" className="responsive-icon icon-opacity1" src={skill36} /></div><div className="icon-text">Ghost Inspector</div></div>
						</Col>
					</Row>
				</Container>
			</div>


			<div className="footer-black-background">
				<img alt="drew" src={footerPic} className="responsive-img" />

				<div className="footer-wrapper">
					<div className="footer-text-seaquinn">Sea Quinn</div>

					<div id="contact" className="footer-text-contact">Get in touch</div>
					<div className="footer-contact-types">
						Drew Quinn<br/>
						335 Pelissier Lake Road Marquette, MI 49855<br/>
						906-235-6303<br/>
						apquinn@gmail.com<br/>
						sea-quinn.com
					</div>
					<div id="footer-contact-types-choice"></div>
				</div>
			</div>
			</>
		);
	}
}

export default App;



