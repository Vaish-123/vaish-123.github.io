document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadResume');
    if (downloadButton) {
        downloadButton.addEventListener('click', function (event) {
            // Prevent default button behavior (if necessary)
            event.preventDefault();

            // Create an anchor element
            const link = document.createElement('a');
            link.target = '_blank';
            link.href = 'assets/files/Vaishnav-V-Nampoothiri_Resume.pdf'; // Path to your PDF file
            link.download = 'Vaishnav-V-Nampoothiri_Resume.pdf'; // Specify the filename for the downloaded file

            // Append to the body (required for Firefox)
            document.body.appendChild(link);

            // Simulate a click to trigger the download
            link.click();

            // Clean up and remove the link from the DOM
            document.body.removeChild(link);
        });
    }
});
