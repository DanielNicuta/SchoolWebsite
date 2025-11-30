(function () {
    var KEY = "cookieConsent"; // "accepted" | "rejected"
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
  
    var consent = localStorage.getItem(KEY);
    if (!consent) banner.style.display = "block";
  
    function set(consentValue) {
      localStorage.setItem(KEY, consentValue);
      banner.style.display = "none";
  
      // Example: if you later add analytics, only load after accepted
      if (consentValue === "accepted") {
        // loadAnalytics(); // your function to inject GA/Matomo, etc.
      }
    }
  
    document.getElementById("cookie-accept")?.addEventListener("click", function () { set("accepted"); });
    document.getElementById("cookie-reject")?.addEventListener("click", function () { set("rejected"); });
  })();
  