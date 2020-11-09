import React from "react";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
    };

    try {
      await fetch("", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
  		<div className="row">
  			<div className="col-md-12  ">
  				<h1 className="page-header text-center">Contact Form Example</h1>
                  <form className="form-horizontal" role="form" method="post" >
					<div className="form-group">
						<label for="name" className="col-sm-2 control-label">Name</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="name" name="name" placeholder="First & Last Name"  />
							
						</div>
					</div>
					<div className="form-group">
						<label for="email" className="col-sm-2 control-label">Email</label>
						<div className="col-sm-10">
							<input type="email" className="form-control" id="email" name="email" placeholder="example@domain.com"  />

						</div>
					</div>
                    <div className="form-group">
						<label for="compamy" className="col-sm-2 control-label">Company</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="compamy" name="compamy" placeholder="Company Name" />
				
						</div>
					</div>
					<div className="form-group">
						<label for="message" className="col-sm-2 control-label">Message</label>
						<div className="col-sm-10">
							<textarea className="form-control" rows="4" name="message"></textarea>
							
						</div>
					</div>
					
					<div className="form-group">
						<div className="col-sm-10 col-sm-offset-2">
							<input id="submit" name="submit" type="submit" value="Send" className="btn btn-primary" />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-10 col-sm-offset-2">

						</div>
					</div>
				</form> 
				
			</div>
		</div>
	</div>   

    </>
  );
}
