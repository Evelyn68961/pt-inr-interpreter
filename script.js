function analyze() {
  const pt = parseFloat(document.getElementById('pt').value);
  let interpretation = "";

   if (isNaN(pt)) {
    interpretation += `<span style="color: dark brown;"> Please enter a value for PT.</span>\n`;
  } else {
    if (pt < 11) {
      interpretation += `<span style="color: #4da6ff;">⬇️ PT: ${pt} seconds — Low \n Possible hypercoagulable state.</span>\n`;
    } else if (pt <= 13.5) {
      interpretation += `<span style="color: green;">✅ PT: ${pt} seconds — Normal range.</span>\n`;
    } else {
      interpretation += `<span style="color: darkred;">🚨 PT: ${pt} seconds — High \n Prolonged clotting time. Consider liver dysfunction, vitamin K deficiency, or anticoagulants.</span>\n`;
    }
  }

  interpretation += `<br><br>`;  // add extra space 

  const inr = parseFloat(document.getElementById('inr').value);

    if (isNaN(inr)) {
    interpretation += `<span style="color: darkbrown;"> Please enter a value for INR.</span>\n`;
    } else {
    if (inr < 0.8) {
        interpretation += `<span style="color: #4da6ff;">⬇️ INR: ${inr} — Low \n Possible risk of thrombosis (under-anticoagulated).</span>\n`;
    } else if (inr <= 1.2) {
        interpretation += `<span style="color: green;">✅ INR: ${inr} — Normal (for those not on warfarin).</span>\n`;
    } else if (inr > 1.2 && inr < 2.0) {
        interpretation += `<span style="color: #CC5500	;">🟠 INR: ${inr} — Borderline high. Monitor closely if on therapy.</span>\n`;
    } else if (inr <= 3.0) {
        interpretation += `<span style="color: green;">✅ INR: ${inr} — Therapeutic range (typical goal for warfarin).</span>\n`;
    } else if (inr <= 3.5) {
        interpretation += `<span style="color: #556B2F;">🟢 INR: ${inr} — High-normal (used for mechanical valves).</span>\n`;
    } else {
        interpretation += `<span style="color: darkred;">🚨 INR: ${inr} — High \n Risk of bleeding. Consider reducing anticoagulant dose.</span>\n`;
    }
    }

  interpretation += `<br><br>`; 

  const aptt = parseFloat(document.getElementById('aptt').value);

  if (isNaN(aptt)) {
    interpretation += `<span style="color: darkbrown;"> Please enter a value for aPTT.</span>\n`;
  } else {
    if (aptt < 25) {
      interpretation += `<span style="color: #4da6ff;">⬇️ aPTT: ${aptt} seconds — Low \n Possible hypercoagulable state or heparin underdosing.</span>\n`;
    } else if (aptt <= 35) {
      interpretation += `<span style="color: green;">✅ aPTT: ${aptt} seconds — Normal range.</span>\n`;
    } else if (aptt <= 70) {
      interpretation += `<span style="color: #556B2F;">🟢 aPTT: ${aptt} seconds — Therapeutic range (for heparin therapy).</span>\n`;
    } else {
      interpretation += `<span style="color: darkred;">🚨 aPTT: ${aptt} seconds — High \n Increased bleeding risk. Consider heparin overdose or factor deficiencies.</span>\n`;
    }
  }

  interpretation += `<br><br>`;

    const ddimer = parseFloat(document.getElementById('ddimer').value);

  if (isNaN(ddimer)) {
    interpretation += `<span style="color: darkbrown;"> Please enter a value for D-dimer.</span>\n`;
  } else {
    if (ddimer < 500) {
      interpretation += `<span style="color: green;">✅ D-dimer: ${ddimer} ng/mL — Normal. Active clot formation is unlikely.</span>\n`;
    } else if (ddimer < 1000) {
      interpretation += `<span style="color: #CC5500;">🟠 D-dimer: ${ddimer} ng/mL — Mild elevation. May occur with infection, inflammation, or post-surgery.</span>\n`;
    } else {
      interpretation += `<span style="color: darkred;">🚨 D-dimer: ${ddimer} ng/mL — High \n Consider evaluation for DVT, PE, or DIC based on clinical context.</span>\n`;
    }
  }

  interpretation += `<br><br>`;

    const fibrinogen = parseFloat(document.getElementById('fibrinogen').value);

  if (isNaN(fibrinogen)) {
    interpretation += `<span style="color: darkbrown;"> Please enter a value for fibrinogen.</span>\n`;
  } else {
    if (fibrinogen < 150) {
      interpretation += `<span style="color: #4da6ff;">⬇️ Fibrinogen: ${fibrinogen} mg/dL — Low \n Suggests possible DIC, liver disease, or severe bleeding.</span>\n`;
    } else if (fibrinogen <= 400) {
      interpretation += `<span style="color: green;">✅ Fibrinogen: ${fibrinogen} mg/dL — Normal range.</span>\n`;
    } else {
      interpretation += `<span style="color: #556B2F;">🟢 Fibrinogen: ${fibrinogen} mg/dL — Elevated \n May indicate inflammation, tissue damage, or pregnancy.</span>\n`;
    }
  }

  interpretation += `<br><br>`;

    


  const output = document.getElementById('output');
  output.innerHTML = interpretation.replace(/\n/g, "<br>");
  output.style.opacity = '1';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    analyze();
  }
});
