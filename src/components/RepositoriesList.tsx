import { FC, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();

	const { data, error, loading } = useTypedSelector(state => state.respositories);

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

			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && data.map((name, index) => <div key={index}>{name}</div>)}
		</div>
	);
};

export default RepositoriesList;
