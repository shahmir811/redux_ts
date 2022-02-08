import { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchRepositories(term);
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input type='text' value={term} onChange={e => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoriesList;
