
function ProfileCard({ info }) {

	return(
		<div className="profile-card">
			<img
				src={info.avatar_url}
				alt={`${info.name || info.login}'s profile`}
				className="profile-avatar"
			/>

			<div className="profile-header">
				<h2>{info.name}</h2>
				<p>{info.login}</p>
			</div>

			<p className="profile-bio">
				{info.bio || "No bio available"}
			</p>

			<div className="profile-details">
				<p>
					<strong>Location: </strong>{info.location || "Not specified"}
				</p>

				<p>
					<strong>Followers: </strong>{info.followers}
				</p>

				<p>
					<strong>Following: </strong>{info.following}
				</p>

				<p>
					<strong>Public Repositories: </strong>{info.public_repos}
				</p>

				<p>
					<strong>Joined: </strong>{new Date(info.created_at).toLocaleDateString()}
				</p>
			</div>
		</div>
	)
}

export default ProfileCard
