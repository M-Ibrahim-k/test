var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
        sidemenu.style.right = "0";
}
    function closemenu() {
        sidemenu.style.right = "-200px";
}

const scriptURL =
      'https://script.google.com/macros/s/AKfycbyEGTiu9AZjXxJINJQ0KZeaoMcXcy90k0js6-Z_UNapruuVIwO001Pmt3g1ILEfKEMy/exec'
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show'); // Add the show class to make it visible

    // Close modal when clicking outside of the modal content
    modal.onclick = function(event) {
      if (event.target === modal) {
        closeModal(modalId);
      }
    };
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove the show class to hide it
}

$(document).ready(function() {
    // Initially hide all work-list items except the first three
    $('.work-list').hide(); // Hide all work-list items
    $('.work-list').slice(0, 3).show(); // Show the first three work-list items
  
    // Click event for the "See more" button
    $('.btn').click(function(e) {
      e.preventDefault(); // Prevent default anchor click behavior
      var $this = $(this); // Cache the button reference
  
      // Check if all work-list items are visible
      if ($('.work-list:visible').length < $('.work-list').length) {
        // Show all work-list items
        $('.work-list').show();
        $this.text('Hide less'); // Change button text to "Hide less"
      } else {
        // Hide all work-list items except the first three
        $('.work-list').hide();
        $('.work-list').slice(0, 3).show(); // Show the first three again
        $this.text('See more'); // Change button text back to "See more"
      }
    });
});
