// Dossier Form

$(document).ready(function () {
  // Handle form submission
  $("#dossier-form").submit(function (event) {
    event.preventDefault();

    // Get form values
    const applicantName = $("#applicant-name").val();
    const permitType = $("#permit-type").val();
    const submissionDate = $("#submission-date").val();

    // Create a new dossier object
    const dossier = {
      applicantName,
      permitType,
      submissionDate,
    };

    // Store the dossier data (localStorage)
    const storedDossiers = JSON.parse(localStorage.getItem("dossiers")) || [];
    storedDossiers.push(dossier);
    localStorage.setItem("dossiers", JSON.stringify(storedDossiers));

    // Clear the form fields after submission
    $("#dossier-form")[0].reset();

    // Create a new <div> element for the submitted dossier
    const dossierDiv = $('<div class="dossier"></div>');
    dossierDiv.append(
      `<div> <span>Applicant's Name:</span> <span>${applicantName}</span> </div>`
    );
    dossierDiv.append(
      `<div> <span>Permit Type:</span> <span>${permitType}</span> </div>`
    );
    dossierDiv.append(
      `<div> <span>Submission Date:</span> <span>${submissionDate}</span></div>`
    );

    // Append the dossier <div> to the .created-dossiers section
    $(".created-dossiers").append(dossierDiv);

    // Show/style created-dossiers
    $(".created-dossiers").addClass("show");
  });
});
