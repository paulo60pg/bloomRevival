import Config from "../Config";
import axios from "axios";

class Api {
  // DEPUTIES
  async getDeputy(id) {
    const url = `${Config.server}/api/deputies/${id}`;
    const deputy = await axios.get(url).then(deputy => deputy.data);
    return deputy;
  }
  async getDeputyBySlug(slug) {
    const url = `${Config.server}/api/deputies/slug/${slug}`;
    const depute = await axios.get(url).then(depute => depute.data);
    return depute;
  }
  async getDeputies() {
    const url = `${Config.server}/api/deputies/`;
    const deputies = await axios.get(url).then(deputies => deputies.data);
    return deputies.deputies;
  }
  async deleteDeputy(id) {
    const url = `${Config.server}/api/deputies/${id}`;
    const deputies = await axios.delete(url).then(deputies => deputies.data);
    return deputies;
  }
  async addDeputy(deputy) {
    const url = `${Config.server}/api/deputies/add`;
    const message = await axios.post(url, deputy).then(res => res.data.msg);
    return message;
  }
  async updateDeputy(deputy, id) {
    const url = `${Config.server}/api/deputies/${id}`;
    const message = await axios.put(url, deputy).then(res => res.data.msg);
    return message;
  }

  // GROUPS
  async getGroup(id) {
    const url = `${Config.server}/api/groups/${id}`;
    const group = await axios.get(url).then(group => group.data);
    return group;
  }
  async getGroupBySlug(slug) {
    const url = `${Config.server}/api/groups/slug/${slug}`;
    const group = await axios.get(url).then(group => group.data);

    return group;
  }
  async getGroups() {
    const url = `${Config.server}/api/groups`;
    const groups = await axios.get(url).then(groups => groups.data);
    return groups;
  }
  async deleteGroup(id) {
    const url = `${Config.server}/api/groups/${id}`;
    const group = await axios.delete(url).then(group => group.data);
    return group;
  }

  async addGroup(group) {
    const url = `${Config.server}/api/groups/add`;
    const message = await axios.post(url, group).then(res => res.data.msg);
    return message;
  }

  async updateGroup(group, id) {
    const url = `${Config.server}/api/groups/${id}`;
    const message = await axios.put(url, group).then(res => res.data.msg);
    return message;
  }

  // PARTIES
  async getParty(id) {
    const url = `${Config.server}/api/parties/${id}`;
    const party = await axios.get(url).then(party => party.data);
    return party;
  }
  async getPartyBySlug(slug) {
    const url = `${Config.server}/api/parties/slug/${slug}`;
    const party = await axios.get(url).then(party => party.data);
    return party;
  }
  async getParties() {
    const url = `${Config.server}/api/parties`;
    const parties = await axios.get(url).then(parties => parties.data);
    return parties;
  }
  async deleteParty(id) {
    const url = `${Config.server}/api/parties/${id}`;

    const party = await axios.delete(url).then(party => party.data);
    return party;
  }
  async addParty(party) {
    const url = `${Config.server}/api/parties/add`;
    const message = await axios.post(url, party).then(res => res.data.msg);
    return message;
  }
  async updateParty(party, id) {
    const url = `${Config.server}/api/parties/${id}`;
    const message = await axios.put(url, party).then(res => res.data.msg);
    return message;
  }

  // LAWS
  async getLaw(id) {
    const url = `${Config.server}/api/laws/${id}`;
    const law = await axios.get(url).then(law => law.data);
    return law;
  }
  async getLaws() {
    const url = `${Config.server}/api/laws`;
    const laws = await axios.get(url).then(laws => laws.data);
    return laws;
  }
  async deleteLaw(id) {
    const url = `${Config.server}/api/laws/${id}`;
    const law = await axios.delete(url).then(law => law.data);
    return law;
  }
  async addLaw(law) {
    const url = `${Config.server}/api/laws/add`;
    const message = await axios.post(url, law).then(res => res.data.msg);
    return message;
  }
  async updateLaw(law, id) {
    const url = `${Config.server}/api/laws/${id}`;
    const message = await axios.put(url, law).then(res => res.data.msg);
    return message;
  }

  // CATEGORIES
  async getCategory(id) {
    const url = `${Config.server}/api/laws-categories/${id}`;
    const category = await axios.get(url).then(category => category.data);
    return category;
  }
  async getCategories() {
    const url = `${Config.server}/api/laws-categories`;
    const categories = await axios.get(url).then(categories => categories.data);
    return categories;
  }
  async deleteCategory(id) {
    const url = `${Config.server}/api/laws-categories/${id}`;
    const category = await axios.delete(url).then(category => category.data);
    return category;
  }
  async addCategory(category) {
    const url = `${Config.server}/api/laws-categories/add`;
    const message = await axios.post(url, category).then(res => res.data.msg);
    return message;
  }
  async updateCategory(category, id) {
    const url = `${Config.server}/api/laws-categories/${id}`;
    const message = await axios.put(url, category).then(res => res.data.msg);
    return message;
  }

  // VOTES
  async getVote(id) {
    const url = `${Config.server}/api/votes/${id}`;
    const vote = await axios.get(url).then(vote => vote.data);
    return vote;
  }
  async getVotes() {
    const url = `${Config.server}/api/votes`;
    const votes = await axios.get(url).then(votes => votes.data);
    return votes;
  }
  async deleteVote(id) {
    const url = `${Config.server}/api/votes/${id}`;
    const vote = await axios.delete(url).then(vote => vote.data);
    return vote;
  }
  async addVote(vote) {
    const url = `${Config.server}/api/votes/add`;
    const message = axios.post(url, vote).then(res => res.data.msg);
    return message;
  }

  // LOGIN
  connect(admin) {
    //
    const url = `${Config.server}/api/admin/login`;
    axios.post(url, admin).then(admin =>
      // Pour sauvegarder cette liste dans la totalité de l'application (App), on le stocke dans le local storage
      localStorage.setItem("admin", JSON.stringify(admin.data))
    );
  }

  // INTRO
  async getIntro() {
    const url = `${Config.server}/api/intro/`;
    const intro = await axios.get(url).then(res => res.data[0]);

    return intro;
  }
  async updateIntro(intro, id) {
    const url = `${Config.server}/api/intro/${id}`;
    const message = await axios.put(url, intro).then(res => res.data.msg);
    return message;
  }
}

export default new Api();
