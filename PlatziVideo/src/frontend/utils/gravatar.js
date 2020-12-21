import md5 from 'md5';


// Crea un avatar, con un md5 hash, very simple
const gravatar = (email) => {
	const base = 'https://gravatar.com/avatar/';
	const formattedEmail = email.trim().toLowerCase();
	const hash = md5(formattedEmail, { enconding: 'binary' });
	return `${base}${hash}`;
};

export default gravatar;