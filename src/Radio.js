import React from "react";
import "./Radio.css";
import axios from "axios";

export default function Radio() {
  function handleResponse(response) {}

  let key = "5d7f58b3856a468cbd32723f806e0b60";
  let url = "https://api.spotify.com/v1/playlists/4SJKE524AgOKUXVBDQwNF2";
  let headers = { Authorization: `Bearer ${key}` };

  axios.get(url, { headers: headers }).then(handleResponse);

  return (
    <div className="Radio">
      <div className="row">
        <div className="col-sm-12">
          <h1>New Wave Radio</h1>
          Artist
          <br />
          Song title
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12">
          Play button
          <br />
          Skip button
          <br />
          volumn
          <br />
          Shuffle
        </div>
        <div className="col-sm-12">
          Scroll of various artist names included in the playlist
        </div>
      </div>
    </div>
  );
}
