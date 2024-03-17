let inner = document.querySelector("#inner")

	inner.innerHTML =
					`
					<h5>Back End Developer<span class="at"> @ </span>Petnet Inc.</h5>
					<p class="para">03/2016 - Present</p>
					<ul class="para pl-5">
					   <li>Developed and maintained RESTful APIs, microservices, and backend services using Laravel and Lumen frameworks.</li>
					   <li>Participated in code reviews, testing, and debugging to ensure code quality,performance, and security standards were met.</li>
					   <li>Implemented Google Cloud Logging for standardized and efficient logging of API calls,improving troubleshooting and reliability.</li>
					</ul>
					 <h5>Instrument Engineer <span class="at"> @ </span>Chiyoda Philippines Corporation</h5>
					 <p class="para">09/2018 - 04/2022</p>
					 <ul class="para pl-5">
						<li>Expedited construction and instrument design deliverables in collaboration with other disciplines.</li>
					 </ul>
					`
	;

document.getElementById("but1").addEventListener("mouseover", function but(){
	inner.innerHTML =
					`
					<h5>Back End Developer<span class="at"> @ </span>Petnet Inc.</h5>
					<p class="para">03/2016 - Present</p>
					<ul class="para pl-5">
					   <li>Developed and maintained RESTful APIs, microservices, and backend services using Laravel and Lumen frameworks.</li>
					   <li>Participated in code reviews, testing, and debugging to ensure code quality,performance, and security standards were met.</li>
					   <li>Implemented Google Cloud Logging for standardized and efficient logging of API calls,improving troubleshooting and reliability.</li>
					</ul>
					 <h5>Instrument Engineer <span class="at"> @ </span>Chiyoda Philippines Corporation</h5>
					 <p class="para">09/2018 - 04/2022</p>
					 <ul class="para pl-5">
						<li>Expedited construction and instrument design deliverables in collaboration with other disciplines.</li>
					 </ul>
					`
	});

document.getElementById("but2").addEventListener("mouseover", function but(){
	inner.innerHTML =
					`
					<h5>BS ECE<span class="at"> @ </span>FEU Institute of Technology</h6>
				    <p class="para">2011 - 2017</p>
				    <ul class="para pl-5">
				    <li>Bachelor of Science in Electronics and Communications Engineering.</li>
				    </ul>
					`
	});

document.getElementById("but3").addEventListener("mouseover", function but(){
	inner.innerHTML =
					`
					 <h5>Bootcamper<span class="at"> @ </span>Zuitt</h6>
					 <p class="para">08/2021 - 01/2022</p>
					 <ul class="para pl-5">
						<li>Full Stack Web development</li>
					 </ul>
					 <h5>Board Exam Passer<span class="at"> @ </span>PRC</h6>
					 <p class="para">04/2018</p>
					 <ul class="para pl-5">
						<li>Electronics and Communications Engineering</li>
						<li>Electronics Technician</li>
					 </ul>
					`
	});