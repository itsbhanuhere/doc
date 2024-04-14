const skills = {
    html: 95,
    css: 80,
    js: 50,
    cpp: 60,
    python: 50,
    react: 50
  };
  
  // Function to animate the bars
  function animateBars() {
    Object.keys(skills).forEach(skill => {
      const bar = document.querySelector(`.${skill}`);
      bar.style.height = `${skills[skill]}px`;
     
    });
  }
  
  
  setTimeout(animateBars, 1000);
  const text = "Hello! I'm Bhanu Sharma, a passionate web developer with a keen interest in crafting beautiful and functional websites. I specialize in HTML, CSS, and JavaScript, and I'm always eager to learn and explore new technologies to enhance my skills Outside of coding, you can find me exploring the latest web development trends, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming new project ideas I'm excited about the opportunity to leverage my skills and creativity to make a positive impact in the world of web development. Let's connect and bring your ideas to life!";
  
  const typingText = document.getElementById('typing-text');
  const cursor = document.getElementById('cursor');
  
  let index = 0;
  
  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 10); 
    }
  }
  
  type();
  