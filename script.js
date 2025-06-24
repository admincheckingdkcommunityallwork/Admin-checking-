function unlockWallet() {
    const pass = document.getElementById("walletPass").value;
    if(pass === "1234"){ // Test password
      document.getElementById("walletLock").style.display = "none";
      document.getElementById("walletData").style.display = "block";
    } else {
      alert("❌ गलत कोड! कृपया सही कोड डालें।");
    }
  }
    
    
  fetch("https://script.google.com/macros/s/AKfycbxfPH7dSLzYbXjYzC7ukRcVOFCN54w_3Ct6-fHchrPDUgB0H3MK-gI0HTTqLagwkSK9dw/exec?sheet=Sheet1")
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        document.getElementById("titleText").innerText = data[0].title || "Title Not Found";
        document.getElementById("motivationText").innerText = data[0].motivational1 || "Motivation Missing";
      }
    })
    .catch(error => {
      console.error("Sheet fetch error:", error);
    });
    
    
// Load motivational2 from Google Sheet
  fetch("https://script.google.com/macros/s/AKfycbxfPH7dSLzYbXjYzC7ukRcVOFCN54w_3Ct6-fHchrPDUgB0H3MK-gI0HTTqLagwkSK9dw/exec?sheet=Sheet1")
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        document.getElementById("teamTitle").innerText = "🚀 " + (data[0].motivational2 || "टीम बनाओ तभी कमाओ");
      }
    })
    .catch(error => console.error("Fetch error:", error));

  // Send Button Handler
  function sendTeamMessage() {
    const msg = document.querySelector('.team-input').value.trim();
    const status = document.getElementById("sendStatus");

    if (msg === "") {
      alert("कृपया टीम का विवरण लिखें।");
      return;
    }

    status.style.display = "block";
    status.innerText = "📡 आपका मैसेज भेजा जा रहा है...";

    // Future Apps Script URL (to be replaced)
    const fakeUrl = "https://your-future-script-url";

    // Just simulate delay for now
    setTimeout(() => {
      status.innerText = "✅ भेज दिया गया! धन्यवाद।";
      document.querySelector('.team-input').value = "";
    }, 2000);
  }
  
  
function submitWork() {
    const msg = document.getElementById("msgInput").value.trim();
    const status = document.getElementById("msgStatus");

    if (msg === "") {
      alert("कृपया कुछ लिखें।");
      return;
    }

    status.style.display = "block";
    status.innerText = "⏳ भेजा जा रहा है...";

    fetch("https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec", {
      method: "POST",
      body: JSON.stringify({ msg1: msg }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        status.innerText = "✅ धन्यवाद! आपका जवाब सेव हो गया है।";
        document.getElementById("msgInput").value = "";
      } else {
        status.innerText = "❌ कुछ गलती हो गई, दोबारा कोशिश करें।";
      }
    })
    .catch(err => {
      console.error(err);
      status.innerText = "❌ Server Error.";
    });
  }
  
  

  function submitWork() {
    const radios = document.getElementsByName("workdone1");
    let selectedValue = "";

    for (let radio of radios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    if (selectedValue === "") {
      alert("कृपया पहले हाँ या नहीं चुनें।");
      return;
    }

    const status = document.getElementById("statusMsg1");
    status.style.display = "block";
    status.innerText = "⏳ भेजा जा रहा है...";

fetch("https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec", {
  method: "POST",
  body: JSON.stringify({ msg2: selectedValue }),  // ⬅️ Changed to msg2
  headers: {
    "Content-Type": "application/json"
  }
})
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        status.innerText = "✅ धन्यवाद! आपका जवाब सेव हो गया है।";
        setTimeout(() => { status.style.display = "none"; }, 3000);
        radios.forEach(r => r.checked = false);
      } else {
        status.innerText = "❌ कुछ गलती हुई";
      }
    })
    .catch(err => {
      console.error(err);
      status.innerText = "❌ Server Error.";
    });
  }
  
  
// ✅ 1. Load Team Title (Column B, motivational1)
  fetch("https://script.google.com/macros/s/AKfycbxfPH7dSLzYbXjYzC7ukRcVOFCN54w_3Ct6-fHchrPDUgB0H3MK-gI0HTTqLagwkSK9dw/exec?sheet=Sheet1")
    .then(res => res.json())
    .then(data => {
      if (data && data.length > 0 && data[0].motivational3) {
        document.getElementById("teamTitle").innerText = "🚀 " + data[0].motivational3;
      }
    });

  // ✅ 2. Send Team Message to Column J (msg3)
  function sendTeamMessage() {
    const msg = document.getElementById("teamInput").value.trim();
    const status = document.getElementById("sendStatus");

    if (msg === "") {
      alert("कृपया टीम का विवरण भरें।");
      return;
    }

    status.style.display = "block";
    status.innerText = "📡 आपका मैसेज भेजा जा रहा है...";

    fetch("https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec", {
      method: "POST",
      body: JSON.stringify({ msg3: msg }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        status.innerText = "✅ धन्यवाद! टीम विवरण सेव हो गया है।";
        document.getElementById("teamInput").value = "";
        setTimeout(() => { status.style.display = "none"; }, 3000);
      } else {
        status.innerText = "❌ कुछ गड़बड़ हुई।";
      }
    })
    .catch(err => {
      console.error(err);
      status.innerText = "❌ सर्वर से कनेक्शन नहीं हो सका।";
    });
  }
  
function submitLeave() {
    const name = document.getElementById("leaveName").value.trim();
    const reason = document.getElementById("leaveReason").value.trim();
    const status = document.getElementById("leaveStatus");

    if (name === "" || reason === "") {
      alert("कृपया नाम और कारण दोनों भरें।");
      return;
    }

    const fullMsg = `नाम: ${name}, कारण: ${reason}`;

    status.style.display = "block";
    status.innerText = "📡 आपका आवेदन भेजा जा रहा है...";

    fetch("https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec", {
      method: "POST",
      body: JSON.stringify({ msg4: fullMsg }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        status.innerText = "✅ छुट्टी का आवेदन सफलतापूर्वक भेज दिया गया है!";
        setTimeout(() => { status.style.display = "none"; }, 3000);
        document.getElementById("leaveName").value = "";
        document.getElementById("leaveReason").value = "";
      } else {
        status.innerText = "❌ Error! कृपया पुनः प्रयास करें।";
      }
    })
    .catch(err => {
      console.error(err);
      status.innerText = "❌ Server Error.";
    });
  }
  

function submitDetails() {
  const your_work_name = document.getElementById("your_work_name").value.trim();
  const your_real_name = document.getElementById("your_real_name").value.trim();
  const bank_details = document.getElementById("bank_details").value.trim();
  const all_upi = document.getElementById("all_upi").value.trim();
  const whatsapp_number = document.getElementById("whatsapp_number").value.trim();
  const any_website = document.getElementById("any_website").value.trim();
  const work = document.getElementById("work").value.trim();
  const status = document.getElementById("submitStatus");

  if (!your_work_name || !your_real_name || !bank_details || !all_upi || !whatsapp_number || !any_website || !work) {
    alert("कृपया सभी विवरण भरें।");
    return;
  }

  const data = {
    your_work_name,
    your_real_name,
    bank_details,
    all_upi,
    whatsapp_number,
    any_website,
    work
  };

  status.style.display = "block";
  status.innerText = "📡 डिटेल भेजी जा रही है...";

  fetch("https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => {
    if (res.result === "success") {
      status.innerText = "✅ धन्यवाद! जानकारी सेव हो गई।";
      document.querySelectorAll(".input-field").forEach(input => input.value = "");
      setTimeout(() => status.style.display = "none", 3000);
    } else {
      status.innerText = "❌ Error!";
    }
  })
  .catch(err => {
    console.error(err);
    status.innerText = "❌ Server Error.";
  });
}


function sendMatdanMessage() {
  const input = document.getElementById("matdanInput").value.trim();
  const status = document.getElementById("matdanStatus");

  if (!input) {
    alert("कृपया सुझाव लिखें।");
    return;
  }

  status.style.display = "block";
  status.innerText = "📡 आपका मैसेज सेव नहीं हो रहा है (प्रस्तावित मोड में है)।";

  // ⛔ fetch disabled (proposing mode)
  // Uncomment below lines when ready to send to Google Sheet:
  /*
  fetch("https://script.google.com/macros/s/PASTE_YOUR_URL/exec", {
    method: "POST",
    body: JSON.stringify({ matdanInput: input }),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    if (res.result === "success") {
      status.innerText = "✅ धन्यवाद! आपका सुझाव सेव हो गया।";
      document.getElementById("matdanInput").value = "";
    } else {
      status.innerText = "❌ Error: " + res.message;
    }
    setTimeout(() => status.style.display = "none", 4000);
  })
  .catch(err => {
    console.error(err);
    status.innerText = "❌ Server Error.";
  });
  */

  setTimeout(() => status.style.display = "none", 4000);
}

function unlockWallet() {
  const enteredCode = document.getElementById("walletPass").value.trim();
  const url = "https://script.google.com/macros/s/AKfycbzlqW4294w7H2YtwSedLMTyje9VI5DjRE1dHCH88qdgJNNKgLV1DiHMYVJWUkni-fMB/exec?sheet=WalletStatus";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // Use loose match (==) to match string and number
      const matchedRow = data.find(row => row["Wallet code"] == enteredCode);

      if (matchedRow) {
        document.getElementById("walletData").innerHTML = `
          <p>💰 Wallet Monthly Amount: ₹${matchedRow["amount"]}</p>
          <p>⚙️ Process Income: ₹${matchedRow["process income"]}</p>
          <p>⏳ Pending Income: ₹${matchedRow["pending income"]}</p>
          <p>📈 Increase Payment: <strong>${matchedRow["increase pement"]}</strong></p>
          <p style="margin-top: 15px;">🎚️ आपका Level: ${matchedRow["member level"]}</p>
          <div class="signature">— Deepak Chauhan × AI Bhai</div>
        `;
        document.getElementById("walletLock").style.display = "none";
        document.getElementById("walletData").style.display = "block";
      } else {
        alert("❌ गलत पासवर्ड! कृपया सही कोड डालें।");
      }
    })
    .catch(err => {
      console.error(err);
      alert("❌ Server Error");
    });
}
