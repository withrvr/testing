let selected_box;
let num_of_row;
let num_of_col;

// method is use to select the random box but not the selected one
function select_random_box() {
	let rand_row = Math.floor((Math.random() * 10) % num_of_row);
	let rand_col = Math.floor((Math.random() * 10) % num_of_col);
	let cur_id = rand_row + "" + rand_col;

	if (cur_id == selected_box) {
		select_random_box();
	} else {
		let box = document.getElementById(cur_id);
		box.style.backgroundColor = "green";
		box.setAttribute("onclick", "clicked(" + box.textContent + ")");
	}
}

// method is call when any box is clicked
function clicked(div_id) {
	let ele = document.getElementById(div_id);
	ele.style.backgroundColor = "red";
	selected_box = div_id;
}

/*

creat the boxes
with specified number of 
rows and colums

*/
function create_row_col(no_row, no_col) {
	if (no_row < 2 && no_col < 2) {
		console.log("can't create");
		return;
	}

	num_of_row = no_row;
	num_of_col = no_col;

	let wrap = document.getElementById("wrap");
	// row.classList.add("wrap");

	for (let i = 0; i < no_row; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
		wrap.appendChild(row);

		// to make all the boxes full screen auto matic
		let cal = 100 / no_row;
		row.style.height = cal + "%";

		for (let j = 0; j < no_col; j++) {
			let col = document.createElement("div");
			col.classList.add("col");
			row.appendChild(col);

			let text = i + "" + j;

			// adding text to the block
			col.appendChild(document.createTextNode(text));
			console.log(text);

			// adding the id and onclick atrribute
			col.id = text;
			let new_text = "'" + text + "'";
		}
	}
	console.log("All the block Created");
	select_random_box();
}

create_row_col(3, 5);
