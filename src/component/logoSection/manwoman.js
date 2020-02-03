import React from 'react';
import manWoman from'./manwoman.module.css';
import { NavLink } from "react-router-dom";


const SectionManWoman = () => {
	return (
		<div className="manWoman">
				<div className="row">
					<div className="col-6">
						<NavLink className={manWoman.silkaman} to="/header">
						<div className={manWoman.sectionMan}>
								<div className={manWoman.imgman}></div>
								<h4 className={manWoman.titleman}>Мужчины</h4>
								<div className={manWoman.btnman}>
									<NavLink className={manWoman.button} to="/header">Перейти</NavLink>
								</div>
						</div>
						</NavLink>
					</div>
					<div className="col-6">
					<NavLink className={manWoman.silkawoman} to="/section">
						<div className={manWoman.sectionWoman}>
						<h4 className={manWoman.titlewoman}>Женщины</h4>
								<div className={manWoman.imgman}></div>
								<div className={manWoman.btnwoman}>
									<NavLink className={manWoman.button} to="/section">Перейти</NavLink>
								</div>
						</div>
						</NavLink>
					</div>
					
						<div className={manWoman.padtop}>
						<div className="container d-flex justify-content-around">
							<div className={manWoman.col}></div>
							<div className={manWoman.col}></div>
							<div className={manWoman.col}></div>
							<div className={manWoman.col}></div>
						</div>
						<div className="container d-flex justify-content-around">
							<p className={manWoman.pTop}>ffffff</p>
							<p className={manWoman.pTop}>ffffff</p>
							<p className={manWoman.pTop}>ffffff</p>
							<p className={manWoman.pTop}>ffffff</p>
						</div>
					</div>
				</div>
		</div>
		);
}


export default SectionManWoman;