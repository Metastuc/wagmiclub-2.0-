import { Verified } from "@/assets/icons";
import Profile from "@/app/profile/page";
import { LandingProfile } from "..";
import "./index.scss";

export const PoweredBy = ({ group }: { group: string }) => {
	function RenderButtons() {
		return (
			<div className={`${group}__powered-buttons`}>
				<button>
					<span>
						<img src="/Frencansto.jpg" />
					</span>
					<span>@elonmusk</span>
					<span>
						<Verified />
					</span>
				</button>

				<button>
					<span>
						<img src="/defi_pfp.jpg" />
					</span>
					<span>@defiprince_</span>
				</button>
			</div>
		);
	}

	return (
		<section className={`${group}__powered`}>
			<div className={`${group}__powered-wrapper`}>
				<div className={`${group}__powered-top`}>
					<RenderButtons />

					<div className={`${group}__powered-profile`}>
						<LandingProfile />
					</div>
				</div>
				<div className={`${group}__powered-bottom`}>
					<b>Powered By</b>

					<div>
						<img
							src="/chainlinkLogo.jpg"
							alt=""
						/>
					</div>

					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="247"
							height="52"
							viewBox="0 0 247 52"
							fill="none"
						>
							<path
								d="M78.6057 48.6623V15.8812H83.62L84.089 18.5163H84.3415C85.7845 16.6893 88.2014 15.3893 91.5924 15.3893C97.7972 15.3893 102.739 20.3082 102.739 27.6163C102.739 34.9244 97.7972 39.8433 91.5924 39.8433C88.2375 39.8433 85.9288 38.5082 84.6662 36.9623H84.4137V48.6623H78.6057ZM96.9314 27.6163C96.9314 23.3298 94.1176 20.6596 90.6906 20.6596C87.2635 20.6596 84.4497 23.365 84.4497 27.6163C84.4497 31.9028 87.2635 34.5731 90.6906 34.5731C94.1176 34.5731 96.9314 31.9028 96.9314 27.6163Z"
								fill="#22143D"
							/>
							<path
								d="M105.697 27.6163C105.697 20.519 110.928 15.3893 117.963 15.3893C124.961 15.3893 130.228 20.4839 130.228 27.6163C130.228 34.6785 124.997 39.8433 117.963 39.8433C110.964 39.8433 105.697 34.6785 105.697 27.6163ZM124.348 27.6163C124.348 23.4352 121.498 20.6596 117.963 20.6596C114.427 20.6596 111.541 23.4352 111.541 27.6163C111.541 31.7974 114.463 34.5379 117.963 34.5379C121.462 34.5379 124.348 31.7974 124.348 27.6163Z"
								fill="#22143D"
							/>
							<path
								d="M134.412 39.3865V6.85132H140.22V39.3513H134.412V39.3865Z"
								fill="#22143D"
							/>
							<path
								d="M161.829 15.8811H168.034L157.536 44.4459C156.49 47.2919 155.047 48.6622 151.295 48.6622H145.668V43.427H150.429C151.295 43.427 151.764 43.0054 152.053 42.3027L152.63 40.7568L142.818 15.8459H149.023L155.263 32.1487H156.201L161.829 15.8811Z"
								fill="#22143D"
							/>
							<path
								d="M169.152 40.546H175.068C175.321 42.092 176.872 44.165 180.587 44.165C184.051 44.165 186.359 42.0217 186.359 38.7893V35.4514H186.107C184.808 36.7866 182.427 38.0163 179.397 38.0163C173.192 38.0163 168.43 33.3785 168.43 26.6677C168.43 20.0271 173.192 15.3893 179.397 15.3893C182.608 15.3893 184.916 16.6541 186.395 18.4109H186.648L187.117 15.846H192.167V38.7541C192.167 44.9731 187.874 49.119 180.587 49.119C172.435 49.119 169.296 43.919 169.152 40.546ZM186.359 26.7028C186.359 23.0487 183.69 20.4839 180.299 20.4839C176.944 20.4839 174.274 23.0487 174.274 26.7028C174.274 30.4271 176.944 32.9569 180.299 32.9569C183.69 32.9569 186.359 30.392 186.359 26.7028Z"
								fill="#22143D"
							/>
							<path
								d="M196.063 27.6163C196.063 20.519 201.294 15.3893 208.328 15.3893C215.363 15.3893 220.594 20.4839 220.594 27.6163C220.594 34.6785 215.363 39.8433 208.328 39.8433C201.294 39.8433 196.063 34.6785 196.063 27.6163ZM214.678 27.6163C214.678 23.4352 211.828 20.6596 208.292 20.6596C204.757 20.6596 201.871 23.4352 201.871 27.6163C201.871 31.7974 204.793 34.5379 208.292 34.5379C211.828 34.5379 214.678 31.7974 214.678 27.6163Z"
								fill="#22143D"
							/>
							<path
								d="M224.778 39.3866V15.8812H229.793L230.262 18.0947H230.514C231.452 17.0406 233.869 15.3893 237.476 15.3893C242.996 15.3893 247 19.2893 247 25.2271V39.3514H241.192V25.965C241.192 22.9433 238.992 20.765 235.997 20.765C232.895 20.765 230.622 23.0487 230.622 25.965V39.3514H224.778V39.3866Z"
								fill="#22143D"
							/>
							<path
								d="M44.7681 36.6108L59.0895 28.5649C59.8471 28.1432 60.3161 27.3351 60.3161 26.4919V10.4351C60.3161 9.59189 59.8471 8.78378 59.0895 8.36216L44.7681 0.316216C44.0105 -0.105405 43.0726 -0.105405 42.315 0.316216L27.9936 8.36216C27.236 8.78378 26.7671 9.59189 26.7671 10.4351V39.1757L16.7384 44.8324L6.7098 39.1757V27.8973L16.7384 22.2405L23.34 25.9649V18.4108L17.9649 15.3892C17.6042 15.1784 17.1713 15.073 16.7384 15.073C16.3055 15.073 15.8726 15.1784 15.5119 15.3892L1.22652 23.4C0.468965 23.8216 0 24.6297 0 25.473V41.5649C0 42.4081 0.468965 43.2162 1.22652 43.6378L15.548 51.6838C16.3055 52.1054 17.2435 52.1054 18.001 51.6838L32.3225 43.6378C33.08 43.2162 33.549 42.4081 33.549 41.5649V12.8243L33.7294 12.7189L43.5776 7.16757L53.6063 12.7892V24.0676L43.5776 29.7243L36.976 26V33.5541L42.3511 36.5757C43.0726 37.0676 44.0105 37.0676 44.7681 36.6108Z"
								fill="url(#paint0_linear_1602_627)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1602_627"
									x1="1.17631"
									y1="42.4929"
									x2="56.6537"
									y2="9.18119"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#A726C1" />
									<stop
										offset="0.88"
										stopColor="#803BDF"
									/>
									<stop
										offset="1"
										stopColor="#7B3FE4"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};
