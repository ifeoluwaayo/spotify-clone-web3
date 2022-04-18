import React from "react";
import "./Album.css";
import { useLocation } from "react-router";
// import { apiResponse } from "../helpers/apiCallResponse";
import OpenSea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useAlbum } from "../hooks/useAlbum";

const Album = ({ setNftAlbum }) => {
	const { state: album } = useLocation();
	const { albumDetails } = useAlbum(album.contract);

	return (
		<>
			<div className="albumContent">
				<div className="topBan">
					<img
						src={album.image}
						alt="Album Cover"
						className="albumCover"
					/>
					<div className="albumDeets">
						<div>ALBUM</div>
						<div className="title">{album.title}</div>
						<div className="artist">
							{albumDetails &&
								JSON.parse(albumDetails[0].metadata).artist}
						</div>
						<div>
							{albumDetails &&
								JSON.parse(albumDetails[0].metadata).year}{" "}
							• {albumDetails && albumDetails.length} Songs
						</div>
					</div>
				</div>

				<div className="topBan">
					<div
						className="playButton"
						onClick={() => setNftAlbum(albumDetails)}>
						PLAY
					</div>
					<div
						className="openButton"
						onClick={() =>
							window.open(
								`https://testnets.opensea.io/assets/mumbai/0x0e69a570967fD932D83d409c8f13b814590Fd15C/1`
							)
						}>
						OpenSea
						<img src={OpenSea} alt="OpenSea" className="openLogo" />
					</div>
				</div>
				<div className="tableHeader">
					<div className="numberHeader">#</div>
					<div className="titleHeader">TITLE</div>
					<div className="numberHeader">
						<ClockCircleOutlined />
					</div>
				</div>
				{albumDetails &&
					albumDetails.map((nft, i) => {
						nft = JSON.parse(nft.metadata);
						return (
							<>
								<div className="tableContent">
									<div className="numberHeader">{i + 1}</div>
									<div
										className="titleHeader"
										style={{ color: "rgb(205, 203, 203" }}>
										{nft.name}
									</div>
									<div className="numberHead">
										{nft.duration}
									</div>
								</div>
							</>
						);
					})}
			</div>
		</>
	);
};

export default Album;
