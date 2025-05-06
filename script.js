const input = document.querySelector('input')

const button = document.querySelector('button')
const parent = document.querySelector('.parent')

function getInfo(id){
    console.log(id)
    return fetch(`https://api.github.com/users/${id}`)
    .then((raw) => raw.json())
}


function Showinfo(details){
    let card = `
        <div class="p-6 bg-[#161b22] border border-[#30363d] rounded-lg shadow-md min-h-[150px] text-white">
      <div class="flex items-center space-x-4">
        <img src="${details.avatar_url}" alt="${details.name?details.name : "Unknown"}" class="w-16 h-16 rounded-full border-2 border-[#238636]">
        <div>
          <h2 class="text-lg font-semibold">${details.name ?details.name : "Unknown"}</h2>
          <p class="text-gray-400 text-sm">@${details.login}</p>
        </div>
      </div>
    
      <p class="mt-3 text-gray-300 text-sm">${details.bio ? details.bio : "Sorry there is no bio..."}</p>
    
      <div class="mt-3 flex flex-wrap gap-x-4 text-sm text-gray-400">
        <p><strong class="text-white">Public Repos:</strong> ${details.public_repos}</p>
        <p><strong class="text-white">Followers:</strong> ${details.followers}</p>
        <p><strong class="text-white">Following:</strong> ${details.following}</p>
        <p><strong class="text-white">Location:</strong> ${details.location ? details.location : "Location is not available" }</p>
      </div>
    
      <div class="mt-2 text-sm text-gray-400">
        <p><strong class="text-white">Company:</strong>${details.company ? details.company :" N/A"} </p>
        <p>
          <strong class="text-white">Blog:</strong>
          <a href="${!details.blog.lenght>0 ? "#" : details.blog}" target="_blank" class="text-[#238636] hover:underline">${!details.blog.lenght>0 ? "No blog found" : details.blog}</a>
        </p>
      </div>
    </div>
    `
    console.log(card)
    parent.innerHTML = card;
}

button.addEventListener('click',()=>{
  if(input.value.trim().length === 0) {
    
  }
    let username = input.value.trim()
    getInfo(username).then((data)=>{
        // console.log(data)
        Showinfo(data)
        })
})

function getRepos(id){
  return fetch(`https:/api.github.com/users/${id}/repos`)
  .then((raw)=> raw.json())
  
}


getRepos("developerchetram").then((data)=>{
console.log(data)
})