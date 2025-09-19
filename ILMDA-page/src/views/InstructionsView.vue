<template>
  <div id="container">
    <h1>Instructions</h1>

    <p id="important">
      <strong>
        PLEASE REFERENCE THIS FOR INSTRUCTIONS ON HOW TO ARRIVE ON-SITE.
        DOT TRAINING STARTS @8:00 AM.
        DA MUST BRING VALID LICENSE AND VALID MEDICAL CERTIFICATE IN ORDER TO TRAIN
      </strong>
    </p>

    <div class="carousel">
      <section v-for="(sec, index) in sections" :key="index" v-show="currentIndex === index">
        <h2>{{ sec.title }}</h2>
        <div v-html="sec.content"></div>
        <img src="/images/DLX7_Logo.PNG"/>
      </section>

      <div class="buttons">
        <button @click="prev" :disabled="currentIndex === 0">Previous</button>
        <button @click="next" :disabled="currentIndex === sections.length - 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructionsView",
  data() {
    return {
      currentIndex: 0,
      sections: [
        {
          title: "Integrated Driver Training - Orientation Information",
          content: `
            <p>Welcome to Amazon!, this information will outline your training
            as a Delivery Associate with Amazon. PLEASE READ ENTIRELY BEFORE
            CONTACTING TRAINERS.</p>
            <p>If you have further questions or need assistance, please reach out to the
            Driver Trainer team at:
            <br /><a href="mailto=dlx7-dt-leadership@amazon.com">dlx7-dt-leadership@amazon.com</a></p>
          `
        },
        {
          title: "Training Schedule",
          content: `
            <ul>
              <li><strong>Day 1:</strong> 8:00 AM (check in starts at 07:45AM) – 4:00 PM at Delivery Station DLX7</li>
              <li><strong>Day 2:</strong> 08:00 AM – 04:00 PM</li>
              <li><strong>Day 3:</strong> DSP will provide a schedule for day 3.</li>
            </ul>
          `
        },
        {
          title: "Day 1 Information",
          content: `
            <ul>
              <li>Address: 6450 Katella Ave, Cypress, CA 90630</li>
              <li>Start time is 7:45 AM. Please arrive promptly. Late trainees (after 8:05) will be rescheduled.</li>
              <li>Enter through the pictured doors. Enter room on the left. A Driver Trainer will meet you with your badge and vest. <strong>DOORS LOCKED – WAIT OUTSIDE</strong>.</li>
              <li><strong>Attire:</strong> Active clothing recommended, no jewelry/hoodies. Closed-toed shoes only (no sandals, Crocs, slides).</li>
              <li><strong>Breaks:</strong> 2×15min breaks + 30min lunch.</li>
            </ul>
          `
        },
        {
          title: "Day 2 Information",
          content: `
            <ul>
              <li>Start time: 8:00 AM</li>
              <li>Training is outdoors – dress for the weather. Summer = hot (bring hat, sunscreen). Winter = cold/windy (jacket). Training continues even in rain.</li>
              <li>Bring driver’s license.</li>
              <li>End time:4:00 PM.</li>
            </ul>
          `
        },
        {
          title: "Day 3 Information",
          content: `<p>Provided by DSP.</p>`
        },
        {
          title: "Final Notes",
          content: `
            <p>Thanks for training with us. Even after training, we’re a resource for you.
            For questions/concerns, email <a href="mailto=dlx7-dt-leadership@amazon.com">dlx7-dt-leadership@amazon.com</a>.</p>
          `
        }
      ]
    };
  },
  methods: {
    next() {
      if (this.currentIndex < this.sections.length - 1) {
        this.currentIndex++;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
#container {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

.carousel {
  position: relative;
  
}



.buttons {
  margin-top: 1rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
#container a {
     background-image: url("/DLX7_Logo.PNG");

  color: white;
  text-decoration: underline; 
}
section {
  transition: opacity 0.5s;
  border: 2px solid #ccc;  
  border-radius: 8px;       
  padding: 1rem;          
  margin: 1rem 0;           
  background: #222;         
  color: white;             
}

section ul {
  list-style-type: upper-alpha; 
  padding-left: 1.5rem;        
}

section li {
  margin: 0.5rem 0;
}
img{
  width: 25%;
  height: auto;
   
}

@media (max-width: 480px) {
  #container {
    width: 90%;
    padding: 0.75rem;
  }
  img{
    width:70%;
  }
}

</style>