import {useEffect} from 'react';
/* import propTypes from 'prop-types'; */



  export function useFetch(userId){

    useEffect(()=>{
      Promise.all([
        fetch('http://localhost:3000/user/'+ userId).then(result => result.json()).then(data=>this.setState({user: data.data})),
        fetch('http://localhost:3000/user/'+ userId + 'activity').then(result => result.json()).then(data=>this.setState({userId: data.data})),
        fetch('http://localhost:3000/user/'+ userId + 'average-sessions').then(result => result.json()).then(data=>this.setState({userId: data.data})),
        fetch('http://localhost:3000/user/'+ userId + 'performance').then(result => result.json()).then(data=>this.setState({userId: data.data})),
        ])
        .then((result) => {
           console.log(result)
        })
        .catch((err) => {
            console.log(err);
        });
     }, [userId]);
  }



/* export function useFetch(userId){

useEffect(()=>{
  fetch('http://localhost:3000/user/'+ userId)
  .then(response => response.json)
  .then(data => this.setState({user: data.data}))
  }, [userId]);

} */




/* export function useFetch(userId) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('http://localhost:3000/user/' + userId)
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
        });
    };

    getData();
  }, [userId]);

  return {data};
}


useFetch.propTypes = {
  userId: propTypes.number.isRequired,
}; */


/* https://fr.javascript.info/fetch */



/* constructor(props){
  super(props);
  this.state={
      user:{userInfos:{firstName:""}}
  }
}
componentDidMount(){
  fetch('http://localhost:3000/user/12').then(result => result.json()).then(data=>this.setState({user: data.data}))
} */



/* this.state.user.id */