const body = document.querySelector('body')
const navHome = document.querySelector(".homeNav")
const navOuniverso = document.querySelector(".ouniversoNav")
const navExploracao = document.querySelector(".exploracaoNav")



function resetClass(){
    body.classList.remove('home')
    body.classList.remove('universo')
    body.classList.remove('exploration')

    navHome.classList.remove('select')
    navOuniverso.classList.remove('select')
    navExploracao.classList.remove('select')
}

export class Router{
    routes = {}


    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)

        
        this.handle()
    }

    
    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#content').innerHTML = html
        })


        if(pathname === "/"){
            resetClass()

            body.classList.add('home')
            navHome.classList.add('select')
        }
        else if(pathname === "/universe"){
            resetClass()

            body.classList.add('universo')
            navOuniverso.classList.add('select')
        }
        else if(pathname === "/exploration"){
            resetClass()
            body.classList.add('exploration')
            navExploracao.classList.add('select')
        }

    }

        

}