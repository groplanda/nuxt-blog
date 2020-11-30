import Cookies from 'js-cookie';

export const state = () => ({
  postLoaded: [],
  commentLoaded: [],
  token: null,
})

export const mutations = {
  addPost(state, post) {
    state.postLoaded.push(post);
  },
  editPost(state, editPost) {
    const index = state.postLoaded.findIndex(post => post.id === editPost.id)
    state.postLoaded[index] = editPost;
  },
  getPosts(state, posts) {
    state.postLoaded = posts;
  },
  addComment(state, comment) {
    state.commentLoaded.push(comment);
  },
  setToken(state, token) {
    state.token = token
  },
  destroyToken(state) {
    state.token = null;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      let response = await fetch('https://nuxt-blog-bdf09.firebaseio.com/posts.json');
      let result = await response.json();
      let posts = [];
      for(let key in result) {
        posts.push({...result[key], id: key})
      }
      commit('getPosts', posts);
    } catch(e) {
      console.log(e);
    }
  },
  async editPost({ commit }, post) {
    const data = {
      title: post.title,
      descr: post.descr,
      img: post.img,
      content: post.content,
    };
    try {
      let response = await fetch(`https://nuxt-blog-bdf09.firebaseio.com/posts/${post.id}.json`, {
        method: 'put',
        body: JSON.stringify(data),
      });
      let result = await response.json();
      commit('editPost', {...result, id: post.id});
    } catch(e) {
      console.log(e);
    }
  },
  async addPost({ commit }, post) {
    try {
      let response = await fetch('https://nuxt-blog-bdf09.firebaseio.com/posts.json', {
        method: 'post',
        body: JSON.stringify(post),
      });
      let result = await response.json();
      commit('addPost', {...post, id: result.name});
    } catch(e) {
      console.log(e);
    }
  },
  async addComment({ commit }, comment) {
    try {
      let response = await fetch('https://nuxt-blog-bdf09.firebaseio.com/comments.json', {
        method: 'post',
        body: JSON.stringify(comment),
      });
      let result = await response.json();
      commit('addComment', {...comment, id: result.name});
    } catch(e) {
      console.log(e);
    }
  },
  async authUser({ commit }, user) {
    const API_KEY = 'AIzaSyCKjkNU99_iYs-yDFrmqYv6MDPAH9tiLeU';
    try {
      let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'post',
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        }),
      });
      let result = await response.json();

        Cookies.set('jwt', result.idToken)
        commit('setToken', result.idToken);

      return result;
    } catch(e) {
      console.log(e);
    }
  },
  logoutUser({ commit }) {
    commit('destroyToken');
    Cookies.remove('jwt');
  },
  checkAuthUser({commit}) {
    let token = Cookies.get('jwt')
    console.log(token);
    if(!token) {
      return false;
    }
    commit('setToken', token);
  }
}

export const getters = {
  getPosts(state) {
    return state.postLoaded;
  },
  getToken(state) {
    return state.token !== null;
  }
}