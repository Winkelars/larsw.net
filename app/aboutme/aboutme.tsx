export function Aboutme() {
  const contents = 
    {
      "Name": "Lars Winkel",
      "Geburtsdatum": "21.10.1998",
      "Geburtsort": "Husum",
      "Adresse": {
        "Straße": "Norderstraße 82",
        "PLZ + Gemeinde": "24939 Flensburg",
      },
      "Kontakt": {
        "E-Mail": "![](./Icons/E-Mail); [mail@larsw.net](mailto:mail@larsw.net)",
        "Mobil": "![](./Icons/Mobil); [+49 174 5864624](tel:+49 174 5864624)",
        "LinkedIn": "![](./Icons/LinkedIn); [/in/larswinkel98](https://www.linkedin.com/in/larswinkel98/)",
        "GitHub": "![](./Icons/GitHub); [Winkelars](https://github.com/Winkelars/)",
        "Website": "![](./Icons/Website); [https://larsw.net/](https://larsw.net/)"
      },
      "Lebenslauf": [
        {
          "Bezeichnung": "Gymnasium Profilfach Chemie",
          "Zeitraum": "Bis Juni '17",
          "Instanz": "Theodor Storm Schule Husum",
          "Abschluss": "Abitur"
        },
        {
          "Bezeichnung": "Informatik Bachelor of Science",
          "Zeitraum": "Okt '17 bis Jul '18",
          "Instanz": "Rheinische Friedrich-Wilhelms-Universität Bonn",
          "Abschluss": null
        },
        {
          "Bezeichnung": "Bundesfreiwilligendienst",
          "Zeitraum": "Okt '18 bis Sept '19",
          "Instanz": "Brücke gGmbH Husum",
          "Abschluss": null
        },
        {
          "Bezeichnung": "Angewandte Informatik Bachelor of Science",
          "Zeitraum": "Sept '19 bis Aug '21",
          "Instanz": "Hochschule Flensburg",
          "Abschluss": null
        },
        {
          "Bezeichnung": "Sozio-Ökonomik Bachelor of Science",
          "Zeitraum": "Okt '21 bis Aug '22",
          "Instanz": "Christian-Albrechts-Universität Kiel",
          "Abschluss": null
        },
        {
          "Bezeichnung": "Betriebliche Ausbildung zum Fachinformatiker in Richtung Systemintegration",
          "Zeitraum": "Aug '22 bis Jul '25",
          "Instanz": "Viakom GmbH",
          "Abschluss": "Fachinformatiker in Richtung Systemintegration"
        }
      ], 
      "Kenntnisse": [
        "Virtualisierung & Containerisierung",
        "Agile Arbeitsumgebung",
        "Serviceorientiertes Arbeiten mit Ticketsystemen",
        "Windows Server",
        "Active Directory",
        "Linux",
        "Automatisierung",
        [
          "Golang",
          "Java",
          "JavaScript",
          "Python",
          "PowerShell",
          "Bash"
        ]
      ]
    }
    
  return (
    <main className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="text-8xl">Hallo Welt!</p>
    </main>
  );
}