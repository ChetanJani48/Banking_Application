package com.banking.backend.UserMapper;

import com.banking.backend.dto.UserDto;
import com.banking.backend.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user){
        return new UserDto(
            user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail()
        );
    }

    public static User maptoUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getUsername(),
                userDto.getPassword(),
                userDto.getEmail()
        );
    }
}
