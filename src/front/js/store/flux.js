const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [{
				image: "https://static.wikia.nocookie.net/tekken/images/d/d9/T8_-_Jin_Render.jpg/revision/latest?cb=20221209093239&path-prefix=en",
				title: "Jin Kazama",
			},
			{
				image: "https://www.mordeo.org/files/uploads/2024/01/Devil-Jin-Tekken-8-scaled.webp",
				title: "Devil Jin",
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/fe/Jun_Kazama_TK8.jpg/revision/latest?cb=20230902021633&path-prefix=en",
				title: "Jun Kazama",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/f4/Tekken8-kazuya-mishima-render.png/revision/latest?cb=20230928151903&path-prefix=es",
				title: "Kasuya Mishima",
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/b/b1/Tekken_8_-_Asuka_Render.jpg/revision/latest?cb=20230425185037&path-prefix=en",
				title: "Asuka Kazama",
		
			},
			{
				image: "https://preview.redd.it/eddy-gordo-tekken-8-render-v0-wh32gt2e29rc1.png?auto=webp&s=e26b5f10144d669a6d59873f53f622c5c799f526",
				title: "Eddy Gordo",
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/d/db/Nina-williams-tekken8-render.jpg/revision/latest?cb=20231117180338&path-prefix=es",
				title: "Nina Wlliams",
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/b/bc/Paul_Phoenix_TK8.jpg/revision/latest?cb=20230810110210&path-prefix=en",
				title: "Paul Phoenix",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/c/c6/Marshall_Law_TK8.jpeg/revision/latest?cb=20230810110456&path-prefix=en",
				title: "Marshall Law",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/1/10/Dfjvatn-0f0c049b-2392-4ce7-9b83-963a48768d87.jpg/revision/latest?cb=20221214104303&path-prefix=es",
				title: "King",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/1/16/Lars_Alexandersson_TK8.jpg/revision/latest?cb=20230810105636&path-prefix=en",
				title: "Lars Alexandersson",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/6/65/Jack-8.jpg/revision/latest/scale-to-width-down/1200?cb=20230919111619&path-prefix=en",
				title: "Jack-8",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/5/5b/TK8_Ling_Xiaoyu.jpg/revision/latest?cb=20231110052420&path-prefix=en",
				title: "Ling Xiaoyu",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/f3/Tekken_8_-_Leroy_Render.jpg/revision/latest?cb=20230425190011&path-prefix=en",
				title: "Leroy Smith",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/5/58/Lili-tekken8-render.jpg/revision/latest?cb=20240212122318&path-prefix=es",
				title: "Lili",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/1/19/Hwoarang_TK8_render.jpg/revision/latest?cb=20230516120648&path-prefix=en",
				title: "Hwoarang",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/fd/Bryan_Fury_TK8_render-II.jpeg/revision/latest?cb=20230602001948&path-prefix=en",
				title: "Bryan Fury",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/f0/Claudio_T8_Render_Temp.jpg/revision/latest?cb=20230723171724&path-prefix=en",
				title: "Claudio Serafino",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/c/ca/Raven_TK8_Render_Full.jpg/revision/latest?cb=20230811131021&path-prefix=en",
				title: "Raven",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/7/71/Azucena_Milagros_Ortiz_Tekken_8.png/revision/latest?cb=20230813230429&path-prefix=es",
				title: "Azucena Milagros Ortiz Castillo",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/1/13/FengWei_TK8_render.jpg/revision/latest?cb=20231112003002&path-prefix=en",
				title: "Feng Wei",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/b/b4/Yoshimitsu_TK8_render.jpg/revision/latest?cb=20230823141811&path-prefix=en",
				title: "Yoshimitsu",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/2/26/Steve_TK8_render.jpg/revision/latest?cb=20230823141212&path-prefix=en",
				title: "Steve Fox",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/a/a6/Leo-tekken8-render.jpg/revision/latest?cb=20240229201621&path-prefix=es",
				title: "Leo",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/5/5e/Dragunov_TK8_render.jpg/revision/latest?cb=20230823140904&path-prefix=en",
				title: "Sergei Dragunov",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/8/80/Kuma_TK8_render.jpg/revision/latest?cb=20230823142016&path-prefix=en",
				title: "Kuma",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/f/fa/Shaheen_TK8_render.jpg/revision/latest?cb=20230823141432&path-prefix=en",
				title: "Shaheen",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/0/00/Panda_TK8_render.jpg/revision/latest?cb=20240225115739&path-prefix=en",
				title: "Panda",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/3/31/Zafina_TK8_Render.jpg/revision/latest?cb=20240116162812&path-prefix=en",
				title: "Zafina",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/e/e0/Lee_TK8_Render.jpg/revision/latest?cb=20240118161733&path-prefix=en",
				title: "Lee Chaolan",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/7/71/Alisa_TK8_Render.jpg/revision/latest?cb=20240116091919&path-prefix=en",
				title: "Alisa Bosconovitch",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/e/e4/TK8_Victor_Chevalier_render.jpg/revision/latest?cb=20231103234430&path-prefix=en",
				title: "Victor Chevalier",
		
			},
			{
				image: "https://static.wikia.nocookie.net/tekken/images/3/32/ReinaT8render.jpg/revision/latest/scale-to-width-down/1200?cb=20231113232918&path-prefix=en",
				title: "Reina",
		
			}
		
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			
		}
	};
};

export default getState;
