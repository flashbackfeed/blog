package com.example.simpledms.service.basic;

import com.example.simpledms.model.entity.basic.Customer;
import com.example.simpledms.repository.basic.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : CustomerService
 * author : GGG
 * date : 2023-10-24
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-24         GGG          최초 생성
 */
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository; // DI
    // question like 검색
    public Page<Customer> findAllByFullNameContaining(String fullName, Pageable pageable){
        Page<Customer> page = customerRepository.findAllByFullNameContaining(fullName,pageable);
        return page;
    }

    public Page<Customer> findAllByEmailContaining(String email, Pageable pageable ){
        Page<Customer> page = customerRepository.findAllByEmailContaining(email,pageable);
        return page;
    }

    public Customer save(Customer customer) {

        Customer customer2 = customerRepository.save(customer);

        return customer2;
    }

    // 상세조회(1건 조회)
    public Optional<Customer> findById(int cid){
        Optional<Customer> optionalCustomer = customerRepository.findById(cid);
        return optionalCustomer;
    }

    // 삭제함수
    public boolean removeById(int cid){
        if(customerRepository.existsById(cid)){
            customerRepository.deleteById(cid);
            return true;
        }
        return false;
    }
}
