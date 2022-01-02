let inner = document.querySelector("#inner")

	inner.innerHTML =
					`
					 <h5>Instrument Engineer <span class="at"> @ </span>Chiyoda Philippines Corporation</h5>
					 <p class="para">09/2018 - Present</p>
					 <ul class="para pl-5">
						<li>Expedited construction and instrument design deliverables in collaboration with other disciplines.</li>
						<li>Involved in the Safety Integrated Level (SIL) study.</li>
						<li>Planned and drafted cable tray systems.</li>
					 </ul>
					 <h5>Intern<span class="at"> @ </span>Now Corporation</h5>
					 <p class="para">03/2016 - 06/2016</p>
					 <ul class="para pl-5">
						<li>Provided technical engineering support for the microwave link design, installation, and testing.</li>
					 </ul>
					`
	;

document.getElementById("but1").addEventListener("mouseover", function but(){
	inner.innerHTML =
					`
					 <h5>Instrument Engineer <span class="at"> @ </span>Chiyoda Philippines Corporation</h5>
					 <p class="para">09/2018 - Present</p>
					 <ul class="para pl-5">
						<li>Expedited construction and instrument design deliverables in collaboration with other disciplines.</li>
						<li>Involved in the Safety Integrated Level (SIL) study.</li>
						<li>Planned and drafted cable tray systems.</li>
					 </ul>
					 <h5>Intern<span class="at"> @ </span>Now Corporation</h5>
					 <p class="para">03/2016 - 06/2016</p>
					 <ul class="para pl-5">
						<li>Provided technical engineering support for the microwave link design, installation, and testing.</li>
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
					 <p class="para">08/2021 - Present</p>
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