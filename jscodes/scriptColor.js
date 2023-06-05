window.addEventListener('DOMContentLoaded', (event) => {
    const hexagons = document.querySelectorAll('.hexagon');
    const middleSection = document.querySelector('.middleSection');
    const rightSection = document.querySelector('.rightSection');

    hexagons.forEach((hexagon) => {
      hexagon.addEventListener('click', (event) => {
        hexagons.forEach((hex) => {
          hex.classList.remove('selected');
        });
        hexagon.classList.add('selected');

        const selectedColorId = hexagon.id;

        middleSection.innerHTML = '';
        rightSection.innerHTML = '';

        
        if (selectedColorId === 'color1') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon1);

          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image1.jpg';
          rightSection.appendChild(image1);

     


        } else if (selectedColorId === 'color2') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'darkred';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#1B570B';
          middleSection.appendChild(colorHexagon4);

          
          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image2.jpg';
          rightSection.appendChild(image1);

        }
        else if (selectedColorId === 'color3') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#1B570B';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'purple';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = 'pink';
          middleSection.appendChild(colorHexagon4);

          
          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image3.jpg';
          rightSection.appendChild(image1);

        }  
        else if (selectedColorId === 'color4') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#1B570B';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'darkred';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = 'grey';
          middleSection.appendChild(colorHexagon4);

          const colorHexagon5 = document.createElement('div');
          colorHexagon5.className = 'colorHexagon';
          colorHexagon5.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon5);
          
          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image4.jpg';
          rightSection.appendChild(image1);

        }
        
        else if (selectedColorId === 'color5') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = 'purple';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#grey';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#3445F0';
          middleSection.appendChild(colorHexagon4);

          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image5.jpg';
          rightSection.appendChild(image1);

        }  
        else if (selectedColorId === 'color6') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#grey';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#3445F0';
          middleSection.appendChild(colorHexagon4);

          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image6.jpg';
          rightSection.appendChild(image1);

        }  
        else if (selectedColorId === 'color7') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#grey';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#3445F0';
          middleSection.appendChild(colorHexagon4);

          const colorHexagon5 = document.createElement('div');
          colorHexagon5.className = 'colorHexagon';
          colorHexagon5.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon5);

          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image7.jpg';
          rightSection.appendChild(image1);

        }  

        else if (selectedColorId === 'color8') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon2);

      
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image8.jpg';
          rightSection.appendChild(image1);

        }  

        else if (selectedColorId === 'color9') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = 'darkred';
          middleSection.appendChild(colorHexagon4);

          const colorHexagon5 = document.createElement('div');
          colorHexagon5.className = 'colorHexagon';
          colorHexagon5.style.backgroundColor = '#1B570B';
          middleSection.appendChild(colorHexagon5);


          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image9.jpg';
          rightSection.appendChild(image1);

        }  
        else if (selectedColorId === 'color10') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = '#F2F279';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#1B570B';
          middleSection.appendChild(colorHexagon4);

        

          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image10.jpg';
          rightSection.appendChild(image1);

        }  

        else if (selectedColorId === 'color11') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'lightblue';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = 'lightpink';
          middleSection.appendChild(colorHexagon4);

          const colorHexagon5 = document.createElement('div');
          colorHexagon5.className = 'colorHexagon';
          colorHexagon5.style.backgroundColor = '#3445F0';
          middleSection.appendChild(colorHexagon5);

          const colorHexagon6 = document.createElement('div');
          colorHexagon6.className = 'colorHexagon';
          colorHexagon6.style.backgroundColor = '#853B00';
          middleSection.appendChild(colorHexagon6);


          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image11.jpg';
          rightSection.appendChild(image1);

        }  
        else if (selectedColorId === 'color12') {
          const colorHexagon1 = document.createElement('div');
          colorHexagon1.className = 'colorHexagon';
          colorHexagon1.style.backgroundColor = '#fff';
          middleSection.appendChild(colorHexagon1);

          const colorHexagon2 = document.createElement('div');
          colorHexagon2.className = 'colorHexagon';
          colorHexagon2.style.backgroundColor = '#D6D7AF';
          middleSection.appendChild(colorHexagon2);

          const colorHexagon3 = document.createElement('div');
          colorHexagon3.className = 'colorHexagon';
          colorHexagon3.style.backgroundColor = 'lightblue';
          middleSection.appendChild(colorHexagon3);

          const colorHexagon4 = document.createElement('div');
          colorHexagon4.className = 'colorHexagon';
          colorHexagon4.style.backgroundColor = '#FAF897';
          middleSection.appendChild(colorHexagon4);

          const colorHexagon5 = document.createElement('div');
          colorHexagon5.className = 'colorHexagon';
          colorHexagon5.style.backgroundColor = '#3445F0';
          middleSection.appendChild(colorHexagon5);

          const colorHexagon6 = document.createElement('div');
          colorHexagon6.className = 'colorHexagon';
          colorHexagon6.style.backgroundColor = 'black';
          middleSection.appendChild(colorHexagon6);


          
          const image1 = document.createElement('img');
          image1.src = './image/imagesOfColorMatching/image12.jpg';
          rightSection.appendChild(image1);

        }  


   
      });
    });
  });