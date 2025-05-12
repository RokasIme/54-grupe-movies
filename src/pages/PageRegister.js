import { PageTemplate } from "../templates/PageTemplate.js";

export class PageRegister extends PageTemplate {
  main() {
    return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">Register</h1>
                            <a class="btn btn-primary" href="/">register</a>
                        </div>
                    </div>
                </div>
            </main>`;
  }
}
