document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Validate form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const contact = document.getElementById('contact').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const academicStress = document.getElementById('academic-stress').value;
      const supportSystem = document.getElementById('support-system').value;
      const mentalHealthResources = document.getElementById('mental-health-resources').value;
      const seekingHelp = document.getElementById('seeking-help').value;
      const mentalHealthStatus = document.getElementById('mental-health-status').value;
  
      // Check required fields
      if (!name || !email || !contact || !age || !gender || !academicStress || !supportSystem || !mentalHealthResources || !seekingHelp || !mentalHealthStatus) {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Age validation
      if (age < 1 || age > 120) {
        alert('Please enter a valid age.');
        return;
      }
  
      // Show success message (or send the form data to a server)
      alert('Thank you for submitting the survey!');
      form.reset(); // Reset the form fields
    });
  });
  