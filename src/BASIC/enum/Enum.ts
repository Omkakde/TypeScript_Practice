enum Status {
    Active, // 0
    Inactive, // 1
    Pending, // 2
  }
  let currentStatus: Status = Status.Active;
  console.log(currentStatus); // Output: 0

  
  enum Role {
    Admin = "ADMIN",
    User = "USER",
  }
  let role: Role = Role.Admin;
  
  enum StatusCode {
    Success = 200,
    ClientError = 400,
    ServerError = 500
  }
  
  console.log(StatusCode.Success);    // Output: 200
  console.log(StatusCode["ClientError"]); // Output: 400
  