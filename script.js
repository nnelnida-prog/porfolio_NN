<!-- JavaScript Functions -->
<script>
    // Copy Email Functionality
    function copyEmail() {
        const emailText = document.getElementById('user-email').innerText;
        navigator.clipboard.writeText(emailText).then(() => {
            alert('Email copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    // Direct Email App Opener
    function sendToEmail(event) {
        event.preventDefault();
        const name = document.getElementById('sender-name').value;
        const message = document.getElementById('sender-message').value;
        const myEmail = document.getElementById('user-email').innerText;

        const mailtoLink = `mailto:${myEmail}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }
</script>
  <!-- Reflection Section -->
<section id="reflection" style="padding: 40px 30px; max-width: 1000px; margin: 40px auto; background-color: rgba(0, 0, 0, 0.9); border: 2px solid #ff0000; border-radius: 12px; box-shadow: 0 0 15px rgba(255, 0, 0, 0.3); color: #ffffff;">
    
    <!-- Title Section -->
    <h2 style="color: #ff0000 !important; font-size: 2.2rem; font-weight: bold; margin-top: 0; margin-bottom: 15px; text-align: left;">Reflection</h2>
    
    <!-- Horizontal Line / Underline -->
    <hr style="border: none; border-top: 1px solid #333333; margin-bottom: 25px;">

    <!-- Subheading / Title -->
    <h3 style="color: #ffffff; font-size: 1.4rem; margin-bottom: 20px;">My BSIT Journey: From Fundamentals to Data-Driven Solutions</h3>

    <!-- Question 1 -->
    <div style="margin-bottom: 25px;">
        <h4 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 8px;">What Did I Know About IT Before Entering BSIT?</h4>
        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
            Before entering the Bachelor of Science in Information Technology (BSIT) program at Datamex College of Saint Adeline, my understanding of Information Technology was quite limited and general. Like many beginners, I initially viewed IT as simply knowing how to operate computers, troubleshooting basic hardware issues, or navigating popular software applications. I knew that technology powered modern businesses, but I lacked a deep understanding of how data was structured, analyzed, and transformed into actionable insights. I did not fully grasp the processes behind building functional web applications, managing local databases, or designing structured analytical reports. Entering the BSIT program opened my eyes to the vast ecosystem of technology, showing me that IT is not just about using computers, but about solving real-world operational problems through structured logic, data accuracy, and user-centered solutions.
        </p>
    </div>

    <!-- Question 2 -->
    <div style="margin-bottom: 25px;">
        <h4 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 8px;">What Were the Most Important Things I Learned?</h4>
        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
            Throughout my academic journey, the most important lesson I learned is the value of <strong>data integrity, structured analysis, and functional problem-solving</strong>. As I progressed in my studies, I discovered my core passion in <strong>Data Analytics</strong>—specifically using tools like <strong>Microsoft Excel</strong> to transform unstructured, raw data into clear business reports. I learned how essential data cleaning and data validation are before conducting any meaningful analysis. Mastering key Excel functions such as <code>SUMIFS</code>, <code>COUNTIFS</code>, and logical <code>IF</code> statements, alongside building dynamic Pivot Tables and summary charts, taught me how to present metrics effectively to support decision-making. Beyond technical tools, I developed critical soft skills including systematic problem-solving, attention to detail, time management, and effective documentation.
        </p>
    </div>

    <!-- Question 3 -->
    <div style="margin-bottom: 25px;">
        <h4 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 8px;">Which Project Taught Me the Most and Why?</h4>
        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
            The project that taught me the most was developing and deploying our <strong>Student Management System</strong>. Building this application served as my primary technical milestone because it challenged me to handle both frontend interfaces and backend logic. This project required implementing essential web features, including user authentication, record creation, dynamic search filtering, and local database management. It taught me how system architecture works in practice—from structuring input validation to organizing data records efficiently. Moreover, publishing this project and deploying a personal portfolio website on GitHub Pages gave me firsthand experience with version control using Git, hosting configurations, and maintaining technical documentation.
        </p>
    </div>

    <!-- Question 4 -->
    <div style="margin-bottom: 25px;">
        <h4 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 8px;">What Technical Difficulty Challenged Me Most?</h4>
        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
            The technical difficulty that challenged me the most was ensuring <strong>data accuracy, state management, and debugging errors</strong> during system integration and web hosting. While developing the Student Management System, configuring local storage handling and resolving deployment settings on GitHub Pages presented significant challenges. Small syntax mistakes or unhandled edge cases in search filtering often broke system functionality. I overcame these obstacles by adopting a step-by-step debugging approach—testing core functions individually, verifying data flow, and continuously referencing documentation. Similarly, when working on complex analytical reports in Excel, dealing with inconsistent raw data taught me the importance of implementing strict Data Validation rules and using text-to-columns cleaning workflows.
        </p>
    </div>

    <!-- Conclusion -->
    <div>
        <h4 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 8px;">Conclusion</h4>
        <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
            As I prepare to complete my BSIT degree, I look back on my journey with immense pride and gratitude. I have grown from a novice curious about technology into an aspiring Data Analytics professional equipped with practical Excel reporting and web application skills. My journey has prepared me to contribute effectively to data-driven teams, and I am excited to apply my skills to real-world business environments.
        </p>
    </div>

</section>

</body>
</html>
