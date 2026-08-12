/* ============================================================
   THE ONLY FILE YOU NEED TO EDIT.

   Leave any value as "" (empty) and the site falls back to a
   sensible default. Delete a line entirely and it does the same.
   ============================================================ */

window.INVITE_CONFIG = {

  /* ---------- WHO ---------- */
  guestOfHonour: "Riya",

  // The big headline reads:  [heroLine1]  Riya  [heroLine2]
  heroLine1: "One last night with",
  heroLine2: "before Seattle",

  eyebrow: "You're invited",

  tagline: "She's off to Seattle for her master's, which means this is the last time we get everyone in one room for a good while. Come eat, talk nonsense, and see her off properly.",

  /* ---------- THE STICKY NOTE ----------
     Shows as a yellow post-it. Set both to "" to hide it. */
  noteTitle: "Fair warning",
  noteBody:  "Our marriage to Riya is turning long distance, please be gentle on us.",

  /* ---------- WHEN ----------
     dateTime drives the countdown. Format: YYYY-MM-DDTHH:MM:SS
     Times are treated as IST. Leave dateTime "" to hide the countdown. */
  dateTime:  "2026-08-29T17:00:00",
  dateLabel: "Saturday, 29th August",
  timeLabel: "5 PM onwards",

  /* ---------- WHERE ----------
     Leave venueName "" and it shows TBD.
     Leave mapsUrl "" and the venue simply won't be a link. */
  venueName:    "",
  venueAddress: "",
  mapsUrl:      "",

  /* ---------- PHOTOS ----------
     Shared Google Photos album. Leave "" to hide the photos card. */
  photoDropUrl: "https://drive.google.com/drive/folders/1G2brdOoBJuewlB7UHsV0QtXIWiPZyKqB?usp=sharing",

  /* ---------- FILM STRIP ----------
     A strip of photos with sprocket holes, like an old negative.

     Flip showFilmstrip to true to switch it on. It stays hidden while
     this is false, or while filmstripPhotos is empty.

     Easiest route: make an "images" folder in the repo, drop the photos
     in, and list them below. Repo-relative paths beat links — they can't
     expire, get rate-limited, or go private on you.

       filmstripPhotos: ["images/riya-01.jpeg", "images/riya-02.jpeg"]

     Full https:// URLs work too, but only ones pointing straight at an
     image file. A Google Photos or Drive *share* link will NOT work here —
     those are web pages, not images.

     Portrait shots crop best (frames are 3:4). Four to eight is the sweet
     spot. Anything that fails to load quietly drops itself.

     A plain string is enough for portrait photos. For landscape ones, use
     the object form and set "position" to bias the crop — the first number
     is horizontal, so a higher value keeps more of the right side:

       { src: "images/riya-04.jpeg", position: "72% 50%" } */
  showFilmstrip: true,
  filmstripTitle: "The <em>evidence</em>",   // <em> renders in the script italic
  filmstripPhotos: [
    "images/riya-01.jpeg",                                // fort, couple in mist
    { src: "images/riya-02.jpeg", position: "50% 38%" },  // café at night (9:16, crop to her)
    "images/riya-03.jpeg",                                // café selfie, straw hat
    "images/riya-04.jpeg",                                // rocks, sweater
    { src: "images/riya-05.jpeg", position: "50% 40%" }   // beach, bandana (9:16)
  ],

  /* ---------- SLIDES ----------
     Optional Drive folder for people presenting something.
     Leave "" and the RSVP still asks for a topic, just without an upload link. */
  deckDropUrl: "",

  /* ---------- ORGANISERS ----------
     Shown in the footer. First one also receives the RSVP on WhatsApp
     if formspreeId below is left empty. Country code + digits only. */
  hosts: [
    { name: "Hitansh", phone: "+919650424175" },
    { name: "Mayank",  phone: "+919711568658" },
    { name: "Vaibhav", phone: "+918586049164" }
  ],

  /* ---------- RSVP DELIVERY ----------
     Free account at formspree.io -> new form -> paste the ID here (e.g. "xyzabcde").
     Leave "" and the button opens WhatsApp to the first organiser instead. */
  formspreeId: "moeadkro"
};
