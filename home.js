const textContainer = document.getElementById("text-container");

    function typeWriter(text, callback) {
      let index = 0;
      const speed = 50;

      function type() {
        if (index < text.length) {
          textContainer.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        } else {
          setTimeout(function() {
            deleteText(callback);
          }, 2000);
        }
      }

      function deleteText(callback) {
        const deleteSpeed = 30; 

        function deleteChars() {
          if (textContainer.textContent.length > 0) {
            textContainer.textContent = textContainer.textContent.slice(0, -1);
            setTimeout(deleteChars, deleteSpeed);
          } else {
            if (typeof callback === 'function') {
              callback();
            }
          }
        }

        deleteChars();
      }

      type();
    }

    const texts = [
      "Selamat Datang di Kaldera Geopark Toba.",
      "Website ini memberikan anda informasi mengenali Kaldera Geopark Toba.",
    ];

    let textIndex = 0;

    function loopTexts() {
      typeWriter(texts[textIndex], function() {
        setTimeout(function() {
          textContainer.textContent = ''; 
          textIndex = (textIndex + 1) % texts.length; 
          loopTexts(); 
        }, 1000);
      });
    }

    // Memulai loop teks
    loopTexts();