<template>
  <div id="home-container">

    <div class="header">
     <img src="/DLX7_Logo.PNG" alt="LMDA Logo" class="logo" />
      <h1 class="title">Last Mile Driver Academy</h1>
    </div>

  
    <div class="scroll-content">
      <p><strong>
        The Last Mile Driver Academy (LMDA) launched on March 28th, 2022 at DDE6 in
        Denver, CO. DDE6 is a standalone driver training facility which supports five
        delivery stations' driver training for DSPs in the Denver region. In 2024,
        DT&amp;P began to launch integrated Last Mile Driver Academy's (iLMDA) to
        consolidate driver training within one "hub" delivery station.
          </strong> 
      </p>

      <p>
        <strong>The program employs a range of training modalities, such as Virtual Reality and
        Slip-Trip-Fall simulation, to offer a multifaceted approach to driver training.
        It involves a practical, hands-on training methodology, which includes a
        real-world on-road driving experience, ensuring a well-rounded training program
        for delivery associates.
        </strong>
      </p>

      <h2>Core Values</h2>
      <ul>
        <li>
          <strong>Safety First:</strong> Display Bias for Action in making AMZL a safer
          organization for DSPs, DAs, and all Amazonians.
        </li>
        <li>
          <strong>DA Centric:</strong> Show Customer Obsession in driver training and
          continuously seek feedback from DAs and DSPs to ensure success.
        </li>
        <li>
          <strong>Experimental Learning:</strong> Merge the art and science of learning
          into world-class training. Focus on hands-on experience enabled by advanced
          learning technologies.
        </li>
        <li>
          <strong>Iterative Process:</strong> Build locally, think globally. Indefinitely
          reevaluate the programs and facilities to meet changing business needs.
        </li>
        <li>
          <strong>Evidence Based:</strong> Incorporate robust training analytics to
          continuously analyze program data and customer feedback for business
          performance improvement.
        </li>
        <li>
          <strong>Take Ownership:</strong> Evaluate, train, and empower DTs and DAs to be
          the safest and most globally effective. Graduate DAs that raise the bar for
          performance, safety, and quality.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
#home-container {
  width: 80%;
  height: 83vh;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: #222;         
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}


.header {

  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  width: 25%;
  height: auto;
  padding-right: 15%;  
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
}
.scroll-content {
  overflow-y: auto;
  flex: 1; 
  padding-right: 0.5rem;
  line-height: 1.6;
}

.scroll-content h2 {
  margin-top: 1.5rem;
  color:white ;
}

.scroll-content ul {
  padding-left: 1.2rem;
  text-align: left;
}

.scroll-content li {
  margin-bottom: 1rem;
}
li strong{
  color:yellow;
}
@media (max-width: 480px) {
  .header{
    justify-content: center;
    margin: 0%;
  
  }
 .logo{
  width: 70%;
  margin: 0%;
  padding-right: 0%;
 }
}
</style>