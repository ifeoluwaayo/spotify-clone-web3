import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";

const { TabPane } = Tabs;

const Home = () => {
	return (
		<>
			<Tabs defaultActivekey="1" centered>
				<TabPane tab="FEATURED" key="1">
					<h1 className="featuredTitle">Today is the day</h1>
					<div className="albums">
						{library.map((e) => (
							<Link
								to="/album"
								state={e}
								className="albumSelection">
								<img
									src={e.image}
									alt={e.title}
									style={{
										width: "150px",
										marginBottom: "10px",
									}}
								/>
								<p>{e.title}</p>
							</Link>
						))}
					</div>
				</TabPane>
				<TabPane tab="GENRES & MOODS" key="2">
					<h1 className="featuredTitle">Pop Hits</h1>
					<div className="albums">
						{library.slice(7, 13).map((e) => (
							<Link
								to="/album"
								state={e}
								className="albumSelection">
								<img
									src={e.image}
									alt={e.title}
									style={{
										width: "150px",
										marginBottom: "10px",
									}}
								/>
								<p>{e.title}</p>
							</Link>
						))}
					</div>
					<h1 className="featuredTitle">Trending</h1>
					<div className="albums">
						{library.slice(2, 8).map((e) => (
							<Link
								to="/album"
								state={e}
								className="albumSelection">
								<img
									src={e.image}
									alt={e.title}
									style={{
										width: "150px",
										marginBottom: "10px",
									}}
								/>
								<p>{e.title}</p>
							</Link>
						))}
					</div>
					<h1 className="featuredTitle">Latest</h1>
					<div className="albums">
						{library.slice(12, 18).map((e) => (
							<Link
								to="/album"
								state={e}
								className="albumSelection">
								<img
									src={e.image}
									alt={e.title}
									style={{
										width: "150px",
										marginBottom: "10px",
									}}
								/>
								<p>{e.title}</p>
							</Link>
						))}
					</div>
				</TabPane>
				<TabPane tab="NEW RELEASES" key="3">
					<h1 className="featuredTitle">Country</h1>
					<div className="albums">
						{library.slice(5, 15).map((e) => (
							<Link
								to="/album"
								state={e}
								className="albumSelection">
								<img
									src={e.image}
									alt={e.title}
									style={{
										width: "150px",
										marginBottom: "10px",
									}}
								/>
								<p>{e.title}</p>
							</Link>
						))}
					</div>
				</TabPane>
			</Tabs>
		</>
	);
};

export default Home;
