class Client:
    def __init__(self, client_info):
        self.id, self.name,self.email, self.city, self.birth_year = client_info
        self.first_name, self.last_name = self.name.split()
        self.credits = 0

    def __str__(self):
        return f"id:{self.id}, first_name:{self.first_name}, last_name:{self.last_name}, email:{self.email}, city:{self.city}, birth_year:{self.birth_year}"
            

    def add_credits(self, number_of_credits):
        self.credits += number_of_credits
        
