import React from 'react';
import "./AdminPanel.css"

const AdminPanel = () => {
  return (
    <div>
        <div className='m-3'>
            <h1>Admin Panel</h1>
        </div>

    <div className='d-flex justify-content-center'>
        <form>

            <div class="mb-3 admin_input">
            <label for="formFileMultiple" class="form-label"> Upload Product Image/s: </label>
            <input class="form-control" type="file" id="formFileMultiple" multiple required/>
            </div>

            <div className='admin_input'>
            <label for="product_name" class="form-label"> Product Name: </label>
            <input class="form-control" type="text" id="product_name" required/>
            </div>
            
            <div className='admin_input'>
            <label for="description" class="form-label"> Description: </label>
            <input class="form-control" type="text" id="description" required/>
            </div>

            <div className='admin_input'>
            <label for="category" class="form-label"> Category: </label>
                <select class="form-select" aria-label="Default select example" id="category">
                    <option value=""> Select category </option>
                    <option value="Anti-depressants">Anti-depressants</option>
                    <option value="Cold Remedies">Cold Remedies</option>
                    <option value="Multivitamins">Multivitamins</option>
                </select>
            </div>

            <div className='admin_input'>
            <label for="price" class="form-label"> Price: </label>
            <input class="form-control" type="text" id="price" required/>
            </div>

            
            <div className='admin_input'>
            <label for="stocks" class="form-label"> Inventory: </label>
            <input class="form-control" type="number" id="stocks" required/>
            </div>



            <div className='admin_submit'>
                <button type="submit" class="btn btn-primary"> Upload Product</button>
            </div>

        </form>
    </div>
    </div>
  )
}

export default AdminPanel
