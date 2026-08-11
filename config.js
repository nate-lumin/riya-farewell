/* ============================================================
   THE ONLY FILE YOU NEED TO EDIT.

   Leave any value as "" (empty) and the site falls back to a
   sensible default. Delete a line entirely and it does the same.
   ============================================================ */

window.INVITE_CONFIG = {

  /* ---------- WHO ---------- */
  guestOfHonour: "Riya",

  // The big headline reads:  [heroLine1]  Riya  [heroLine2]
  heroLine1: "One last",
  heroLine2: "before Seattle",

  eyebrow: "You're invited",

  tagline: "She's off to Seattle for her master's, which means this is the last time we get everyone in one room for a good while. Come eat, talk nonsense, and see her off properly.",

  /* ---------- THE STICKY NOTE ----------
     Shows as a yellow post-it. Set both to "" to hide it. */
  noteTitle: "Fair warning",
  noteBody:  "We are collectively losing our wife. Please be gentle with us.",

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
  photoDropUrl: "",

  /* ---------- FILM STRIP ----------
     A strip of photos with sprocket holes, like an old negative.

     Flip showFilmstrip to true to switch it on. It stays hidden while
     this is false, or while filmstripPhotos is empty.

     Easiest route: make an "images" folder in the repo, drop the photos
     in, and list them below. Repo-relative paths beat links — they can't
     expire, get rate-limited, or go private on you.

       filmstripPhotos: ["images/riya-01.jpg", "images/riya-02.jpg"]

     Full https:// URLs work too, but only ones pointing straight at an
     image file. A Google Photos or Drive *share* link will NOT work here —
     those are web pages, not images.

     Portrait shots crop best (frames are 3:4). Four to eight is the sweet
     spot. Anything that fails to load quietly drops itself. */
  showFilmstrip: false,
  filmstripTitle: "The <em>evidence</em>",   // <em> renders in the script italic
  filmstripPhotos: [
    // "images/riya-01.jpg",
    // "images/riya-02.jpg",
    // "images/riya-03.jpg",
    // "images/riya-04.jpg"
  ],

  /* ---------- SLIDES ----------
     Optional Drive folder for people presenting something.
     Leave "" and the RSVP still asks for a topic, just without an upload link. */
  deckDropUrl: "",

  /* ---------- ORGANISERS ----------
     Shown in the footer. First one also receives the RSVP on WhatsApp
     if formspreeId below is left empty. Country code + digits only. */
  hosts: [
    { name: "Hitansh", phone: "+919999999991" },
    { name: "Mayank",  phone: "+919999999992" },
    { name: "Vaibhav", phone: "+919999999993" }
  ],

  /* ---------- RSVP DELIVERY ----------
     Free account at formspree.io -> new form -> paste the ID here (e.g. "xyzabcde").
     Leave "" and the button opens WhatsApp to the first organiser instead. */
  formspreeId: ""
};
