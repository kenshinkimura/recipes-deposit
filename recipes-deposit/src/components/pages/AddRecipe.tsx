import { Link } from 'react-router-dom';

export const AddRecipe: React.FC = () => {
    return (
        <div>
            <div>
                <Link to="/">go to home page</Link></div>
            <form>
                <p>
                    <label htmlFor="title">Název Receptu</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        required={true}
                    />
                </p>
                <p>
                    <label htmlFor="image">foto</label>
                    <input
                        id="image"
                        type="url"
                        name="image"
                        required={true}
                    />
                </p>

                <p>
                    <label htmlFor="ingredience">Ingredience</label>
                    <textarea
                        id="ingredience"
                        name="ingredience"
                        rows={5}
                        required={true}
                    />
                </p>

                <p>
                    <label htmlFor="description">Postup</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        required={true}
                    />
                </p>
                <div>
                    <button
                        type="button"

                    >
                        Smazat
                    </button>
                    <button>Uložit</button>
                </div>
            </form>
        </div>
    );
};
