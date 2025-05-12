import { PageTemplate } from "../templates/PageTemplate.js";

export class Pagelogin extends PageTemplate {
  main() {
    return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">Login</h1>
                            <a class="btn btn-primary" href="/">register</a>
                        </div>
                    </div>
                </div>
            </main>`;
  }
}
