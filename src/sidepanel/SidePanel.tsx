import './SidePanel.css'

export const SidePanel = () => {
  return (
    <>
      <header>
        <img src="" alt="Beacon logo" />
      </header>
      <main>
        <section>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <h2>LoadPRO #27658930</h2>
          </div>
          <div>
            <div>Labels</div>
            <div>
              <span>Carrier</span> <span>Carrier Info</span>
            </div>
            <div>
              <div>Status</div>
              <div>
                <span>High</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Beacon icon" />
            </div>
            <div>
              <div>
                <div>Good morning, Mary!</div>
                <div>Please confirm the following updates:</div>
                <div>Carrier info</div>
              </div>
              <div>
                <img src="" alt="Confirm image" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>TMS Info</div>
            <div>Scheduling Info</div>
            <div>Labels Info</div>
          </div>
          <details>
            <summary>
              <h3>Customer</h3>
            </summary>
            <form>
              <label>
                Name
                <input type="text" placeholder="Name" />
              </label>
              <label>
                Address
                <input type="text" placeholder="Address" />
              </label>
              <label>
                City
                <input type="text" placeholder="City" />
              </label>
              <label>
                State
                <input type="text" placeholder="State" />
              </label>
              <label>
                Zip
                <input type="text" placeholder="Zip" />
              </label>
              <label>
                Code
                <input type="text" placeholder="Code" />
              </label>
              <label>
                Contact
                <input type="text" placeholder="Contact" />
              </label>
              <label>
                Phone
                <input type="text" placeholder="Phone" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Email" />
              </label>
              <label>
                Ref number
                <input type="text" placeholder="Ref number" />
              </label>
            </form>
          </details>
          <details>
            <summary>
              <h3>Bill to</h3>
            </summary>
            <button>edit</button>
          </details>
          <details>
            <summary>
              <h3>Pick up</h3>
            </summary>

            <button>edit</button>
          </details>
          <details>
            <summary>
              <h3>Consignee</h3>
            </summary>
            <button>edit</button>
          </details>
          <details>
            <summary>
              <h3>Carrier</h3>
            </summary>
            <button>edit</button>
          </details>
        </section>
      </main>
      <footer>
        <button>Confirm</button>
      </footer>
    </>
  )
}

export default SidePanel
